import { getDocument, text } from '@cbcruk/dom'

async function getList(page) {
  const document = await getDocument(`/bbs/page.php?hid=update&page=${page}`)
  const rowNodeList = Array.from(document.querySelectorAll('.media[rel]'))
  const items = rowNodeList.map((row) => {
    try {
      const id = row.getAttribute('rel')
      const thumbnail = row.querySelector('img').getAttribute('src')
      const title = row.querySelector('.post-subject > a')
      const countNodeList = row.querySelectorAll('.count')
      const [views, comments, likes] = Array.from(countNodeList).map((node) =>
        parseInt(text(node).replace(/,/, ''), 10)
      )
      const createdAt = row.querySelector('.post-info .txt-normal')
      const textNodes = Array.from(row.querySelector('.post-text').childNodes)
      const [author, categories] = textNodes
        .filter((node) => node.nodeType === 3)
        .map((node) => text(node))
        .filter(Boolean)

      return {
        id,
        thumbnail,
        title: text(title.childNodes[0]),
        createdAt: text(createdAt),
        author,
        categories,
        comments,
        likes,
        views,
      }
    } catch (error) {
      return null
    }
  })

  return items.filter(Boolean)
}

export default getList
