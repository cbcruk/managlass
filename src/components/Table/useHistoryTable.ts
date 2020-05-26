import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useTable, usePagination } from 'react-table'

function useHistoryTable({ columns, data, controlledPageCount }) {
  const history = useHistory()
  const table = useTable(
    {
      columns,
      data,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: controlledPageCount,
    },
    usePagination
  )
  const { pageIndex } = table.state

  useEffect(() => {
    window.scrollTo(0, 0)
    history.push(`/board/${pageIndex + 1}`)
  }, [history, pageIndex])

  return table
}

export default useHistoryTable
