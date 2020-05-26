import React from 'react'
import { useParams } from 'react-router-dom'
import { usePaginatedQuery } from 'react-query'
import { getList } from '../../lib/rpc'
import Table from '../../components/Table'
import Alert from '../../components/Alert'

function Board() {
  const { page = '1' } = useParams()
  const { resolvedData, error, isFetching } = usePaginatedQuery(page, getList)

  const data = (resolvedData?.items ?? []).map(
    ({ title, popularPoint, comments, likes, createdAt }) => ({
      title,
      popularPoint,
      comments,
      likes,
      createdAt,
    })
  )

  if (error) {
    return (
      <Alert message="네트워크에 문제가 생겼습니다. 새로고침 버튼을 눌러주세요." />
    )
  }

  return (
    <div className="p-4">
      <Table
        data={data}
        loading={isFetching}
        pageCount={resolvedData?.total || 0}
      />
    </div>
  )
}

export default Board
