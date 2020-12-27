import getComic from './getComic'

async function comic({ query }, res) {
  const data = await getComic(query.id)

  res.json(data)
}

export default comic
