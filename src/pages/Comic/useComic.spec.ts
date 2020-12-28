import { renderHook, act } from '@testing-library/react-hooks'
import Wrapper from './MockWrapper'
import useComic from './useComic'

test('useComic', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useComic(), {
    wrapper: Wrapper,
  })

  await waitForNextUpdate()

  act(() => {
    result.current.mutate()
  })

  await waitForNextUpdate()

  expect(result.current).toMatchSnapshot()
})
