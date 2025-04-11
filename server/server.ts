import express from 'express'
import * as Path from 'node:path'

import walksRoutes from './routes/great-walks.ts'
import userRoutes from './routes/user.ts'
import userWalksRoutes from './routes/user-walks.ts'
import commentsRoutes from './routes/comments.ts'
const server = express()

server.use(express.json())

server.use('/api/v1/great-walks', walksRoutes)
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/user-walks', userWalksRoutes)
server.use('/api/v1/comments', commentsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
