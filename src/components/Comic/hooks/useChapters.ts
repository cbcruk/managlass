import { useParams } from 'react-router-dom'

function useChapters(chapters) {
  const { id } = useParams<{ id: string }>()
  const currentIndex = chapters.findIndex((chapter) => chapter.value === id)
  const current = chapters[currentIndex]
  const prev = chapters[currentIndex + 1]
  const next = chapters[currentIndex - 1]

  return {
    current,
    prev,
    next,
  }
}

export default useChapters
