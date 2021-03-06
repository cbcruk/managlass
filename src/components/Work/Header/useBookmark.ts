import { getIdToken } from '@cbcruk/firebase-app'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { fetchBookmarkAtom } from '../../../atom/bookmark'

function useBookmark({ id, meta }) {
  const [bookmarks, setBookmarks] = useAtom(fetchBookmarkAtom)
  const handleBookmark = useCallback(async () => {
    const token = await getIdToken()

    await fetch('/api/scrap', {
      method: 'POST',
      body: JSON.stringify({ id, ...meta }),
      headers: {
        Authorization: token,
      },
    })

    setBookmarks(id)
  }, [id, meta, setBookmarks])
  const isBookmarked = bookmarks.includes(id)

  return {
    isBookmarked,
    handleBookmark,
  }
}

export default useBookmark
