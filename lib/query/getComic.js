import { getDocument, text } from '@cbcruk/dom'

async function getComic(id) {
  const document = await getDocument(`/comic/${id}`)
  const titleElement = document.querySelector('.toon-title')
  const [title, , bookmark] = titleElement.childNodes
  const navElement = document.querySelector('.toon-nav')
  const workId = navElement
    .querySelector('a:last-of-type')
    .getAttribute('href')
    .match(/comic\/(\d+)/)[1]
  const selectElement = document.querySelector('select[name="wr_id"]')
  const chapters = Array.from(selectElement.options).map((option) => ({
    value: option.value,
    label: option.label,
  }))
  const imageList = document.body.innerHTML
    .match(/html_data\+='(.+)';/g)
    .map((d) => d.match(/html_data\+='(.+)';/)[1])
    .join('')
    .split('.')
    .map((d) => String.fromCharCode(parseInt(d, 16)))
    .join('')
    .match(/<img[^>]* src="([^"]*)"[^>]*>/g)
    .filter((d) => d.includes('loading-image'))
    .map((d) => d.match(/data-\w+="(.+)"/)[1])

  return {
    title: text(title),
    workId,
    bookmark: text(bookmark),
    chapters,
    imageList,
  }
}

export default getComic
