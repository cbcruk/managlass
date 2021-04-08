import { render } from '@testing-library/react'
import { Provider } from 'jotai'
import Protected from './Protected'

jest.mock('./useUser', () => ({
  __esModule: true,
  default: () => true,
}))

describe('Protected', () => {
  it('base', () => {
    render(
      <Provider>
        <Protected>child</Protected>
      </Provider>
    )
  })
})
