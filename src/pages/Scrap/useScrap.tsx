import { useAtom } from 'jotai'
import useSWR from 'swr'
import { fetchBookmarkAtom } from '../../atom/bookmark'

function useScrap(user) {
  const { data, error } = useSWR(['/api/scrap', user], (url) => {
    if (!user) {
      return
    }

    return fetch(url).then((response) => response.json())
  })

  useAtom(fetchBookmarkAtom)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export default useScrap
