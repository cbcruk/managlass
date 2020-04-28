import React, { useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Pagination } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'
import styles from './style.module.css'

type Props = Pick<PaginationProps, 'total'>

function PaginationWrapper({ total }: Props) {
  const history = useHistory()
  const { page = '1' } = useParams()
  const handleChange = useCallback(
    (page) => {
      window.scrollTo(0, 0)
      history.push(`/board/${page}`)
    },
    [history]
  )

  return (
    <Pagination
      current={parseInt(page, 10)}
      total={total}
      showSizeChanger={false}
      pageSize={1}
      onChange={handleChange}
      className={styles.wrapper}
    />
  )
}

export default PaginationWrapper
