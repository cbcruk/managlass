import { airtableInstance } from '../../lib/airtable'

async function scrapIds(_req, res) {
  const { data } = await airtableInstance.get('/Table', {
    params: {
      view: 'Grid',
      filterByFormula: `NOT({id} = '')`,
      fields: ['id'],
    },
  })

  const records = data.records.map((record) => {
    return record.fields.id
  })

  res.json(records)
}

export default scrapIds
