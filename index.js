io.on('conection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message:', msg)
    })
  })