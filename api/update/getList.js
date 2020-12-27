import getDocument from './getDocument'

async function getList(page) {
  const document = await getDocument(`/bbs/page.php?hid=update&page=${page}`)
  const rows = Array.from(document.querySelectorAll('.media[rel]'))
  const items = rows.map((row) => {
    try {
      const id = row.getAttribute('rel')
      const thumbnail = row.querySelector('img').getAttribute('src')
      const title = row
        .querySelector('.post-subject > a')
        .childNodes[0].textContent.trim()
        .replace(/\s+$/g, '')
      const [views, comments, likes] = Array.from(
        row.querySelectorAll('.count')
      ).map((node) => parseInt(node.textContent.replace(/,/, '').trim(), 10))
      const createdAt = row
        .querySelector('.post-info .txt-normal')
        .textContent.trim()
      const [author, categories] = Array.from(
        row.querySelector('.post-text').childNodes
      )
        .map((node) => node.textContent.trim())
        .filter(Boolean)

      return {
        id,
        thumbnail,
        title,
        createdAt,
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
