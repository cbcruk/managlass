import React from 'react'
import { useParams } from 'react-router-dom'
import { usePaginatedQuery } from 'react-query'
import { Layout, Space } from 'antd'
import { getList } from '../../lib/rpc'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'
import Alert from '../../components/Alert'
import styles from './style.module.css'

function Board() {
  const { page = '1' } = useParams()
  const { resolvedData, error, isFetching } = usePaginatedQuery(page, getList)

  if (error) {
    return (
      <Alert message="네트워크에 문제가 생겼습니다. 새로고침 버튼을 눌러주세요." />
    )
  }

  return (
    <Layout.Content className={styles.wrapper}>
      <Space direction="vertical" size={20}>
        <Table dataSource={resolvedData?.items ?? []} loading={isFetching} />
        <Pagination total={resolvedData?.total ?? 0} />
      </Space>
    </Layout.Content>
  )
}

export default Board
