import { getDocument, text, number } from '@cbcruk/dom'

async function getWork(id) {
  const document = await getDocument(`/comic/${id}`)
  const viewContentNodeList = document.querySelectorAll(
    '[itemprop="description"] .view-content'
  )
  const [title, author, categories] = viewContentNodeList
  const meta = {
    title: text(title),
    author: text(author.querySelector('a')),
    categories: Array.from(categories.querySelectorAll('a')).map((a) =>
      text(a)
    ),
    issue: text(categories.querySelector('a')),
  }
  const listItemNodeList = document.querySelectorAll('.list-body > .list-item')
  const list = Array.from(listItemNodeList).map((item) => {
    const subjectElement = item.querySelector('.item-subject')
    const detailsElement = item.querySelector('.item-details')
    const [createdAt, views, likes] = detailsElement.children
    const ratingElement = item.querySelector('.wr-star')
    const id = subjectElement.getAttribute('href').match(/\/comic\/(\d+)/)[1]
    const title = text(subjectElement).replace(/^\d+|\d+$/g, '')
    const count = subjectElement.querySelector('.count')
    const comments = count ? number(count) : 0

    return {
      id,
      title,
      createdAt: text(createdAt),
      comments,
      views: parseInt(text(views).replace(/,/g, ''), 10),
      likes: number(likes),
      rating: parseInt(text(ratingElement).replace(/\(|\)/g, ''), 10),
    }
  })

  return {
    meta,
    list,
  }
}

export default getWork
