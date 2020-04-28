import React from 'react'
import { Pagination } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'

function Remote({
  total,
  onChange,
}: Pick<PaginationProps, 'total' | 'onChange'>) {
  return (
    <Pagination
      simple
      defaultCurrent={1}
      pageSize={2}
      total={total}
      onChange={onChange}
    />
  )
}

export default Remote
