import { useEffect, useCallback, useReducer } from 'react'

enum Direction {
  Next,
  Prev,
}

type PageState = {
  page: number
}

type Action = { type: Direction }

function reducer(state: PageState, action: Action) {
  switch (action.type) {
    case Direction.Next:
      return {
        ...state,
        page: state.page + 1,
      }
    case Direction.Prev:
      return {
        ...state,
        page: state.page - 1,
      }
    default:
      return state
  }
}

function usePage(total: number) {
  const [{ page }, dispatch] = useReducer(reducer, {
    page: 1,
  })
  const handleKeydown = useCallback(
    ({ keyCode }: KeyboardEvent) => {
      const isStart = page === 1
      const isEnd = page >= total / 2

      switch (keyCode) {
        case 37:
        case 40:
          !isEnd &&
            dispatch({
              type: Direction.Next,
            })
          break
        case 39:
        case 38:
          !isStart &&
            dispatch({
              type: Direction.Prev,
            })
          break
        default:
          break
      }
    },
    [total, page]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown])

  return page
}

export default usePage
