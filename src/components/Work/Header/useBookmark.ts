import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { fetchBookmarkAtom } from '../../../atom/bookmark'
import { getIdToken } from '../../../lib/firebase'

function useBookmark({ id, meta }) {
  const [bookmarks] = useAtom(fetchBookmarkAtom)
  const handleBookmark = useCallback(async () => {
    const token = await getIdToken()

    await fetch('/api/scrap', {
      method: 'POST',
      body: JSON.stringify({ id, ...meta }),
      headers: {
        Authorization: token,
      },
    })
  }, [id, meta])
  const isBookmarked = bookmarks.includes(id)

  return {
    isBookmarked,
    handleBookmark,
  }
}

export default useBookmark
