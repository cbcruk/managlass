export type MangaSummary = {
  id: string
  thumbnail: string
  title: string
  popularPoint: number
  comments: number
  likes: number
  createdAt: string
}

export type MangaDetail = {
  title: string
  subTitle: string
  popularPoint: number
  comments: number
  likes: number
  imgList: string[]
  chapters: string[][]
}
