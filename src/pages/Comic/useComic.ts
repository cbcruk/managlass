import { useParams } from 'react-router-dom'
import useSWR from 'swr'

function useComic() {
  const params = useParams<{ id: string }>()
  const {
    data,
    isValidating,
    error,
    mutate,
  } = useSWR(`/api/comic/${params.id}`, (url) =>
    fetch(url).then((r) => r.json())
  )

  return {
    data,
    error,
    mutate,
    isLoading: !data && !error,
    isValidating,
  }
}

export default useComic
