exports.setupChatSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('join-chat', (documentId) => {
      socket.join(documentId);
    });

    socket.on('send-message', (message) => {
      socket.to(message.documentId).emit('receive-message', message);
    });
  });
};
