import { createServer } from 'http'
import express, { Request, Response } from 'express'
import { startSocket } from './socket'
import * as path from 'path'

export default async function startServer() {
  console.log('start server')
  const PORT = process.env.PORT || 5000
  const app = express()
  const httpServer = createServer(app)

  app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve('./client/index.html'))
  })
  startSocket(httpServer)

  httpServer.listen(PORT, () => console.log(`App listening on ${PORT}`))
}
