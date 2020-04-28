import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { ColumnProps, TableProps } from 'antd/lib/table'
import { MangaSummary } from '../../types'

type Props = Pick<TableProps<MangaSummary>, 'dataSource' | 'loading'>

const columns: ColumnProps<MangaSummary>[] = [
  {
    title: '제목',
    key: 'title',
    render: (_, { id, title }) => {
      return <Link to={`/manga/${id}`}>{title}</Link>
    },
  },
  { title: '인기', dataIndex: 'popularPoint', key: 'popularPoint' },
  { title: '코멘트', dataIndex: 'comments', key: 'comments' },
  { title: '좋아요', dataIndex: 'likes', key: 'likes' },
  { title: '등록일', dataIndex: 'createdAt', key: 'createdAt' },
]

function TableWrapper({ dataSource, loading }: Props) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
      tableLayout="auto"
      pagination={false}
      loading={loading}
    />
  )
}

export default TableWrapper
