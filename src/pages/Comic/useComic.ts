import { useParams } from 'react-router-dom'
import useSWR from 'swr'

function useComic() {
  const params = useParams<{ id: string }>()
  const { data, isValidating, mutate } = useSWR(`/api/comic/${params.id}`)

  return {
    data,
    mutate,
    isValidating,
  }
}

export default useComic
