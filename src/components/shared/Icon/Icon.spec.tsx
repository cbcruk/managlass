import { render } from '@testing-library/react'
import { eye } from 'ionicons/icons'
import Icon from './Icon'

describe('Icon', () => {
  it('base', () => {
    const { getByTestId } = render(<Icon name={eye} label="eye" />)

    const icon = getByTestId('Icon')

    expect(icon).toBeInTheDocument()
    expect(icon.textContent).toContain('eye')
  })
})
