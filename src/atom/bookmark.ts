import { atom } from 'jotai'
import isEmpty from 'lodash/isEmpty'

export const bookmarkAtom = atom([])

export const fetchBookmarkAtom = atom(async (get) => {
  const bookmark = get(bookmarkAtom)

  if (!isEmpty(bookmark)) {
    return bookmark
  }

  const response = await fetch('/api/scrap/ids')
  const lazyBookmark = await response.json()

  return lazyBookmark
})
