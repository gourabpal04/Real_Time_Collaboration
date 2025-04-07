require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const editorRoutes = require('./routes/editorRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { setupEditorSocket } = require('./sockets/editorSocket');
const { setupChatSocket } = require('./sockets/chatSocket');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: process.env.FRONTEND_URL || '*' }
});

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/editor', editorRoutes);
app.use('/api/chat', chatRoutes);

app.use(errorHandler);

setupEditorSocket(io);
setupChatSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
