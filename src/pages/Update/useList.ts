import uniqBy from 'lodash/uniqBy'
import useSWRInfinite from 'swr/infinite'

function useList() {
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => `/api/update?page=${page + 1}`,
    (key) => fetch(key).then((r) => r.json())
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
