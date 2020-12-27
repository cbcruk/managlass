import { useCallback, useState } from 'react'

function useControl() {
  const [isActive, setActive] = useState(false)
  const handleActive = useCallback((e) => {
    const target = e.target as HTMLElement

    if (target.tagName !== 'BUTTON') {
      setActive((prev) => !prev)
    }
  }, [])

  return {
    isActive,
    handleActive,
  }
}

export default useControl
