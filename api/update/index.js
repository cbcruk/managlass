import getList from '../../lib/query/getList'

async function update({ query }, res) {
  const page = query.page || 1
  const data = await getList(page)

  res.json(data)
}

export default update
