import { fireEvent, render } from '@testing-library/react'
import Nav from './Nav'

describe('Nav', () => {
  it('base', () => {
    const spy = jest.fn()
    const spyNext = jest.fn()
    const spyPrev = jest.fn()
    const { getByTestId } = render(
      <Nav
        slideRef={{
          current: {
            slideNext: spyNext,
            slidePrev: spyPrev,
          },
        }}
        handleActive={spy}
      />
    )

    const nav = getByTestId('Nav')
    const next = getByTestId('Nav-next')
    const prev = getByTestId('Nav-prev')

    fireEvent.click(nav)
    expect(nav).toBeInTheDocument()
    expect(spy).toHaveBeenCalled()

    fireEvent.click(next)
    fireEvent.click(prev)
    expect(spyNext).toHaveBeenCalled()
    expect(spyPrev).toHaveBeenCalled()
  })
})
