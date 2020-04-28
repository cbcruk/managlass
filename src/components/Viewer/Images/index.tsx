import React from 'react'
import { MangaDetail } from '../../../types'
import styles from './style.module.css'

type Props = {
  images: MangaDetail['imgList']
}

function Images({ images }: Props) {
  return (
    <div className={styles.wrapper}>
      <img src={images[0]} alt="" className={styles.img} loading="lazy" />
      <img src={images[1]} alt="" className={styles.img} loading="lazy" />
    </div>
  )
}

export default Images
