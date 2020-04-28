/* eslint-disable no-eval */
import { API_ENDPOINT } from './server-constants'
import parse from 'date-fns/parse'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ko from 'date-fns/locale/ko'
import { MangaSummary, MangaDetail } from '../types'

async function rpc(path: string) {
  try {
    const res = await fetch(`${API_ENDPOINT}${path}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    const textHtml = await res.text()
    const parser = new DOMParser()
    const document = parser.parseFromString(textHtml, 'text/html')

    return document
  } catch (error) {
    console.error(error)
  }
}

export type ListResponse = {
  items: MangaSummary[]
  total: number
}

export async function getList(page: string | number): Promise<ListResponse> {
  const document = await rpc(`/bbs/board.php?bo_table=manga&page=${page}`)
  const posts = Array.from(document?.querySelectorAll('.post-row') ?? [])
  const items = posts.map((post) => {
    const image = post.querySelector('.post-image')
    const info = post.querySelector('.post-info')
    const [subject, counts] = (post.querySelector('.post-subject')?.children ??
      []) as HTMLElement[]
    const [, id] =
      image
        ?.querySelector('a')
        ?.getAttribute('href')
        ?.match(/wr_id=(\d+)/) ?? []
    const thumbnail = image?.querySelector('img')?.getAttribute('src') ?? ''
    const title = subject.textContent?.replace(/NEW/, '').trim() ?? ''
    const [comments, likes] = Array.from(counts.children).map((child) =>
      parseInt(child.textContent?.trim() ?? '', 10)
    )
    const [, createdAt, popularPoint] = Array.from(info?.children ?? []).map(
      (child) => child.textContent?.trim() ?? ''
    )

    return {
      id,
      thumbnail,
      title,
      comments,
      likes,
      createdAt: formatDistanceToNow(
        parse(createdAt, 'MM-dd HH:mm', new Date()),
        {
          locale: ko,
          addSuffix: true,
        }
      ),
      popularPoint: parseInt(popularPoint.replace(/\D/g, ''), 10),
    }
  })

  const [, total] =
    document
      ?.querySelector('.pagination > li:last-child > a')
      ?.getAttribute('href')
      ?.match(/page=(\d+)$/) ?? []

  return {
    items,
    total: parseInt(total, 10),
  }
}

export async function getDetail(id: string): Promise<MangaDetail> {
  const document = await rpc(`/bbs/board.php?bo_table=manga&wr_id=${id}`)
  const titleElement = document?.querySelector('.toon-title')?.childNodes ?? []
  const title = titleElement[0]?.textContent?.trim() ?? ''
  const subTitle = titleElement[1]?.textContent?.trim() ?? ''
  const popularPoint = titleElement[5]?.textContent?.replace(/\D/g, '') ?? ''
  const comments = titleElement[7]?.textContent?.replace(/\D/g, '') ?? ''
  const likes = titleElement[9]?.textContent?.replace(/\D/g, '') ?? ''
  const [, rawImgList] =
    document?.body.innerHTML.match(/img_list = (\S*)/) ?? []
  const [, rawChapters] =
    document?.body.innerHTML.match(/only_chapter = (\[\[.+\]\];)/) ?? []

  return {
    title,
    subTitle,
    popularPoint: parseInt(popularPoint, 10),
    comments: parseInt(comments, 10),
    likes: parseInt(likes, 10),
    imgList: eval(rawImgList),
    chapters: eval(rawChapters) as string[][],
  }
}
