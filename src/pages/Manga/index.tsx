import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Spin } from 'antd'
import { getDetail } from '../../lib/rpc'
import Viewer from '../../components/Viewer'
import Alert from '../../components/Alert'

function Manga() {
  const { id = '0' } = useParams()
  const { data, error } = useQuery(id, getDetail)

  if (!data) {
    return <Spin />
  }

  if (error) {
    return (
      <Alert message="네트워크에 문제가 생겼습니다. 새로고침 버튼을 눌러주세요." />
    )
  }

  return <Viewer {...data} />
}

export default Manga
