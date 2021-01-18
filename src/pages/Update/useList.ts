import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'

function useList() {
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => `/api/update?page=${page + 1}`
  )
  const list = data ? uniqBy([].concat(...data), 'id') : []

  return {
    list,
    mutate,
    isValidating,
    isLoading: !data && !error,
    size,
    setSize,
  }
}

export default useList
