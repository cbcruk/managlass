import { get, isEmpty, pick } from 'lodash'
import { airtableInstance } from '../../lib/airtable'
import admin from '../../lib/firebaseAdmin'

async function scrap(req, res) {
  if (req.method === 'POST') {
    try {
      const { uid } = await admin
        .auth()
        .verifyIdToken(req.headers.authorization)

      if (!uid) {
        return
      }

      const fields = pick(JSON.parse(req.body), ['id', 'author', 'title'])
      const { data } = await airtableInstance.get('/Table', {
        params: {
          fields: ['id'],
          filterByFormula: `{id} = '${fields.id}'`,
        },
      })

      if (isEmpty(data.records)) {
        await airtableInstance.post('/Table', {
          records: [
            {
              fields,
            },
          ],
        })
      }

      res.send(200)
      res.end()
    } catch (error) {
      res.status(error.response.status)
      res.end()
    }
  }

  if (req.method === 'GET') {
    const { data } = await airtableInstance.get('/Table', {
      params: {
        view: 'Grid',
        filterByFormula: `NOT({id} = '')`,
        ...req.query,
      },
    })

    const records = data.records.map((record) => {
      return {
        id: record.id,
        fields: {
          ...record.fields,
          cover: get(record, 'fields.cover[0].url', ''),
        },
      }
    })

    res.json(records)
  }
}

export default scrap
