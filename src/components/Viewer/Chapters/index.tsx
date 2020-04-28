import React from 'react'
import { Select } from 'antd'
import { MangaDetail } from '../../../types'
import { useParams, useHistory } from 'react-router-dom'

type Props = {
  chapters: MangaDetail['chapters']
}

function Chapters({ chapters }: Props) {
  const history = useHistory()
  const { id } = useParams()

  return (
    <Select
      defaultValue={id}
      onChange={(value) => history.push(`/manga/${value}`)}
    >
      {chapters.map((chapter) => {
        const [label, value] = chapter

        return (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default Chapters
