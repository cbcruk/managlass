import { fireEvent, render } from '@testing-library/react'
import Nav from './Nav'

describe('Nav', () => {
  it('base', () => {
    const spy = jest.fn()
    const { getByText } = render(<Nav handleSlide={spy} />)

    const next = getByText('다음')

    fireEvent.click(next)
    expect(next).toBeInTheDocument()
    expect(spy).toHaveBeenCalledWith('slideNext')

    const prev = getByText('이전')

    fireEvent.click(prev)
    expect(prev).toBeInTheDocument()
    expect(spy).toHaveBeenCalledWith('slidePrev')
  })
})
