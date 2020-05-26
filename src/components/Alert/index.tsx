import * as React from 'react'

type Props = {
  message: string
  description?: string
}

function Alert({ message, description }: Props) {
  return (
    <div>
      <div>{message}</div>
      {description && <div>{description}</div>}
    </div>
  )
}

export default Alert
