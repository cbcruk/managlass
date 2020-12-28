import { render } from '@testing-library/react'
import List from './List'

describe('List', () => {
  it('base', () => {
    const { getByTestId } = render(
      <List
        list={[
          {
            id: '6343635',
            thumbnail:
              'https://manatoki91.net/data/file/comic/159084/6343635/thumb-Vu1TFXI9vHxD_240x320.jpg',
            title: '수염을 깎는다. 그리고 여고생을 줍는다 24-3화',
            createdAt: '12-28 16:45',
            author: '아다치 이마루',
            categories: '드라마,라노벨,러브코미디',
            comments: 5,
            likes: 1,
            views: 1171,
          },
        ]}
      />
    )

    const list = getByTestId('List')

    expect(list).toBeInTheDocument()
    expect(list.childElementCount).toEqual(1)
  })
})
