import { fireEvent, render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('base', () => {
    const spy = jest.fn()
    const { getByTestId } = render(<Header onRefresh={spy} />)

    const header = getByTestId('Header')

    expect(header).toBeInTheDocument()

    const button = getByTestId('Header-button')

    fireEvent.click(button)

    expect(spy).toHaveBeenCalled()
  })
})
