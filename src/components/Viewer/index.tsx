import React from 'react'
import { PageHeader, Descriptions } from 'antd'
import { MangaDetail } from '../../types'
import Chapters from './Chapters'
import Images from './Images'
import usePage from './usePage'

function Viewer({
  title,
  subTitle,
  chapters,
  popularPoint,
  comments,
  likes,
  imgList,
}: MangaDetail) {
  const page = usePage(imgList.length)

  return (
    <div>
      <PageHeader
        backIcon={false}
        title={title}
        subTitle={subTitle}
        extra={[<Chapters key={0} chapters={chapters} />]}
      >
        <Descriptions size="small">
          <Descriptions.Item label="인기">{popularPoint}</Descriptions.Item>
          <Descriptions.Item label="코멘트">{comments}</Descriptions.Item>
          <Descriptions.Item label="좋아요">{likes}</Descriptions.Item>
        </Descriptions>
      </PageHeader>

      <Images images={[imgList[(page - 1) * 2], imgList[(page - 1) * 2 + 1]]} />
    </div>
  )
}

export default Viewer
