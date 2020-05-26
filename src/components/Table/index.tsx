import React from 'react'
import useHistoryTable from './useHistoryTable'
import { MangaSummary } from '../../types'
import Pagination from '../Pagination'

type Props = {
  data: Partial<MangaSummary>[]
  loading: boolean
  pageCount: number
}

const columns = [
  {
    Header: 'A',
    columns: [
      { Header: '제목', accessor: 'title' },
      { Header: '인기', accessor: 'popularPoint' },
      { Header: '코멘트', accessor: 'comments' },
      { Header: '좋아요', accessor: 'likes' },
      { Header: '등록일', accessor: 'createdAt' },
    ],
  },
]

function Table({ data, pageCount: controlledPageCount }: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    rows,
    state: { pageIndex },
  } = useHistoryTable({
    columns,
    data,
    controlledPageCount,
  })

  return (
    <div>
      <table {...getTableProps()} className="table-fixed">
        <thead>
          <tr>
            {headerGroups[1].headers.map((column) => (
              <th {...column.getHeaderProps()} className="px-4 py-2">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="border px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <Pagination
        current={pageIndex + 1}
        total={pageOptions.length}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  )
}

export default Table
