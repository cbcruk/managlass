import { useMemo } from 'react'
import range from 'lodash/range'

function usePagination(page: string) {
  return useMemo(() => {
    const end = Math.ceil(parseInt(page, 10) / 10) * 10

    return [1, end - 10, ...range(end - 9, end + 1), end + 1]
  }, [page])
}

export default usePagination
