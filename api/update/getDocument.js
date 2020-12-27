import axios from 'axios'
import { JSDOM } from 'jsdom'

async function getDocument(path) {
  const response = await axios.get(process.env.API_URL + path)
  const {
    window: { document },
  } = new JSDOM(response.data)

  return document
}

export default getDocument
