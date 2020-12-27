import getDocument from '../../update/getDocument'

async function getComic(id) {
  const document = await getDocument(`/comic/${id}`)
  const titleElement = document.querySelector('.toon-title')
  const title = titleElement.childNodes[0].textContent
  const bookmark = titleElement.childNodes[2].textContent
  const selectElement = document.querySelector('select[name="wr_id"]')
  const chapters = Array.from(selectElement.options).map(
    (option) => option.value
  )
  const imageList = document.body.innerHTML
    .match(/html_data\+='(.+)';/g)
    .map((d) => d.match(/html_data\+='(.+)';/)[1])
    .join('')
    .split('.')
    .map((d) => String.fromCharCode(parseInt(d, 16)))
    .join('')
    .match(/<img(.+)\/>/g)
    .filter((d) => d.includes('loading-image'))
    .map((d) => d.match(/data-\w+="(.+)"/)[1])

  return {
    title,
    bookmark,
    chapters,
    imageList,
  }
}

export default getComic
