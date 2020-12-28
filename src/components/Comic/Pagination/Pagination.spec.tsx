import { render } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('base', () => {
    const { getByTestId } = render(<Pagination>1/1</Pagination>)

    const pagination = getByTestId('Pagination')

    expect(pagination).toBeInTheDocument()
    expect(pagination).toHaveTextContent('1/1')
  })
})
