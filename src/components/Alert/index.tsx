import React from 'react'
import { Alert } from 'antd'
import { AlertProps } from 'antd/lib/alert'

type Props = Pick<AlertProps, 'message' | 'description'>

function AlertWrapper({ message, description }: Props) {
  return (
    <Alert type="error" message={message} description={description} showIcon />
  )
}

export default AlertWrapper
