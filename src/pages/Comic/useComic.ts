import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetchImage } from './helpers'

function useComic() {
  const params = useParams<{ id: string }>()
  const { data, isValidating, error, mutate } = useSWR(
    `/api/comic/${params.id}`,
    async (url) => {
      const data = await fetch(url).then((r) => r.json())

      for (const image of data.imageList) {
        await fetchImage(image)
      }

      return data
    }
  )

  return {
    data,
    mutate,
    isLoading: !data && !error,
    isValidating,
  }
}

export default useComic
