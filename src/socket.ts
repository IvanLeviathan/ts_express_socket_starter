import { Server as socketServer, Socket } from 'socket.io'
import { Server } from 'http'

export function startSocket(httpServer: Server) {
  const io = new socketServer(httpServer, {})

  io.on('connection', (socket: Socket) => {
    console.log('User connected')
    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
    socket.on('message', (message: String) => {
      console.log('New message from', socket.id, message)
    })
  })
}
