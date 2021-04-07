import { renderHook, act } from '@testing-library/react-hooks'
import useControl from './useControl'

test('useControl', () => {
  const { result } = renderHook(() => useControl())

  expect(result.current.isActive).toEqual(false)

  act(() => {
    result.current.handleActive({
      target: {
        tagName: 'DIV'
      },
    })
  })

  expect(result.current.isActive).toEqual(true)

  act(() => {
    result.current.handleActive({
      target: {
        tagName: 'BUTTON',
      },
    })
  })

  expect(result.current.isActive).toEqual(true)
})
