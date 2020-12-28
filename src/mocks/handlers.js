import { rest } from 'msw'

export const handlers = [
  rest.get('/api/comic/:id', (_req, res, ctx) => {
    return res(
      ctx.json({
        title: '1화',
        bookmark: '(1/1)',
        chapters: ['6344349'],
        imageList: [
          'GZPmplOIna3h.jpeg',
          '_ZodNy4isTeK.jpeg',
          'ZkBnJQHcD0t5.jpeg',
          'A8Zin0lBRsaE.jpeg',
        ],
      })
    )
  }),
  rest.get('/api/update', (req, res, ctx) => {
    const page = req.url.searchParams.get('page')

    return res(
      ctx.json([
        {
          id: `1-${page}`,
          thumbnail: '/Vu1TFXI9vHxD_240x320.jpg',
          title: '24-3화',
          createdAt: '12-28 16:45',
          author: '',
          categories: '',
          comments: 5,
          likes: 1,
          views: 1171,
        },
        {
          id: `2-${page}`,
          thumbnail: '/Vu1TFXI9vHxD_240x320.jpg',
          title: '24-4화',
          createdAt: '12-28 16:45',
          author: '',
          categories: '',
          comments: 5,
          likes: 1,
          views: 1171,
        },
      ])
    )
  }),
]
