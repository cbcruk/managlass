import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'

function useList() {
  const { data, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => `/api/update?page=${page + 1}`
  )
  const list = data ? uniqBy([].concat(...data), 'id') : []

  return {
    list,
    mutate,
    isValidating,
    size,
    setSize,
  }
}

export default useList
