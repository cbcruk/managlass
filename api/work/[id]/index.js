import getWork from './getWork'

async function work({ query }, res) {
  const data = await getWork(query.id)

  res.json(data)
}

export default work
