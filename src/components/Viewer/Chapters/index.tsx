import React from 'react'
import { MangaDetail } from '../../../types'
import { useParams, useHistory } from 'react-router-dom'

type Props = {
  chapters: MangaDetail['chapters']
}

function Chapters({ chapters }: Props) {
  const history = useHistory()
  const { id } = useParams()

  return (
    <select
      defaultValue={id}
      onChange={(value) => history.push(`/manga/${value}`)}
    >
      {chapters.map((chapter) => {
        const [label, value] = chapter

        return (
          <option key={value} value={value}>
            {label}
          </option>
        )
      })}
    </select>
  )
}

export default Chapters
