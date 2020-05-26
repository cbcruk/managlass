import React from 'react'
import { TableInstance } from 'react-table'

type Props = {
  current: number
  total: number
} & Partial<TableInstance>

function Pagination({
  current,
  total,
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount,
}: Props) {
  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>

      <span>
        Page
        <strong>
          {current} of {total}
        </strong>
      </span>
    </div>
  )
}

export default Pagination
