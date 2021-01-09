import { useParams } from 'react-router-dom'
import useSWR from 'swr'

function useWork() {
  const params = useParams<{ id: string }>()
  const { data, isValidating, error, mutate } = useSWR(`/api/work/${params.id}`)

  return {
    data,
    error,
    mutate,
    isLoading: !data && !error,
    isValidating,
  }
}

export default useWork
