import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function useChapters(chapters) {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const currentIndex = chapters.findIndex((chapter) => chapter.value === id)
  const current = chapters[currentIndex]
  const prev = chapters[currentIndex + 1]
  const next = chapters[currentIndex - 1]
  const handleChange = useCallback(
    (e) => {
      history.push(`/comic/${e.detail.value}`)
    },
    [history]
  )

  return {
    current,
    prev,
    next,
    handleChange,
  }
}

export default useChapters
