import axios from 'axios'

export const airtableInstance = axios.create({
  baseURL: process.env.AIRTABLE_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_MANAGLASS_TOKEN}`,
  },
})
