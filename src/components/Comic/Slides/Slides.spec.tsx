import { render } from '@testing-library/react'
import Slides from './Slides'

describe('Slides', () => {
  it('base', () => {
    const { getByTestId } = render(<Slides list={[1, 2, 3]} />)

    const slides = getByTestId('Slides')

    expect(slides.childElementCount).toEqual(3)
  })
})
