exports.setupEditorSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('join-document', (documentId) => {
      socket.join(documentId);
    });

    socket.on('send-changes', ({ documentId, content }) => {
      socket.to(documentId).emit('receive-changes', content);
    });
  });
};
