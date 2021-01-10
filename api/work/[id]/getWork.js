import getDocument from '../../update/getDocument'

async function getWork(id) {
  const document = await getDocument(`/comic/${id}`)
  const viewContents = document.querySelectorAll(
    '[itemprop="description"] .view-content'
  )
  const meta = {
    title: viewContents[0].textContent.trim(),
    author: viewContents[1].querySelector('a').textContent.trim(),
    categories: Array.from(viewContents[2].querySelectorAll('a')).map((a) =>
      a.textContent.trim()
    ),
    issue: viewContents[2].querySelector('a').textContent.trim(),
  }
  const list = Array.from(
    document.querySelectorAll('.list-body > .list-item')
  ).map((item) => {
    const subjectElem = item.querySelector('.item-subject')
    const detailsElem = item.querySelector('.item-details')
    const ratingElem = item.querySelector('.wr-star')
    const id = subjectElem.getAttribute('href').match(/\/comic\/(\d+)/)[1]
    const title = subjectElem.textContent.trim().replace(/^\d+|\d+$/g, '').trim()
    const comments = subjectElem.querySelector('.count')?.textContent?.trim() ?? 0
    const createdAt = detailsElem.children[0].textContent.trim()
    const views = detailsElem.children[1].textContent.trim().replace(/,/g, '')
    const likes = detailsElem.children[2].textContent.trim()
    const rating = ratingElem.textContent.trim().replace(/\(|\)/g, '')

    return {
      id,
      title,
      createdAt,
      comments: parseInt(comments, 10),
      views: parseInt(views, 10),
      likes: parseInt(likes, 10),
      rating: parseInt(rating, 10),
    }
  })

  return {
    meta,
    list,
  }
}

export default getWork
