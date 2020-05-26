import React from 'react'
import { MangaDetail } from '../../../types'

type Props = {
  images: MangaDetail['imgList']
}

function Images({ images }: Props) {
  return (
    <div className="flex flex-row-reverse">
      <img src={images[0]} alt="" loading="lazy" />
      <img src={images[1]} alt="" loading="lazy" />
    </div>
  )
}

export default Images
