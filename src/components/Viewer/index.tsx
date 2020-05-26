import React from 'react'
import { MangaDetail } from '../../types'
import Chapters from './Chapters'
import Images from './Images'
import usePage from './usePage'

function Viewer({
  title,
  subTitle,
  chapters,
  popularPoint,
  comments,
  likes,
  imgList,
}: MangaDetail) {
  const page = usePage(imgList.length)

  return (
    <div>
      <div>
        <div>
          <div>{title}</div>
          <div>{subTitle}</div>
        </div>

        <Chapters key={0} chapters={chapters} />

        <div>
          <div>인기 - {popularPoint}</div>
          <div>코멘트 - {comments}</div>
          <div>좋아요 - {likes}</div>
        </div>
      </div>

      <Images images={[imgList[(page - 1) * 2], imgList[(page - 1) * 2 + 1]]} />
    </div>
  )
}

export default Viewer
