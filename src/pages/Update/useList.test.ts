import { renderHook, act } from '@testing-library/react-hooks'
import useList from './useList'

test('useComic', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useList())

  await waitForNextUpdate()

  act(() => {
    result.current.setSize(result.current.size + 1)
  })

  await waitForNextUpdate()

  expect(result.current.size).toEqual(2)
})
