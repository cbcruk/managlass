import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('base', () => {
    const { getByTestId } = render(<Header />)
    const header = getByTestId('Header')

    expect(header).toBeInTheDocument()
  })
})
