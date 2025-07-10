// useChat.js
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import axios from '../utils/api';

const useChat = (roomId, user) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  // Fetch initial chat history
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/chat/${roomId}`);
        setMessages(res.data);
      } catch (err) {
        console.error('Failed to load chat history:', err);
      }
    };
    fetchMessages();
  }, [roomId]);

  // Setup socket connection
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');

    socketRef.current.emit('joinChat', roomId);

    socketRef.current.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Send message
  const sendMessage = (text) => {
    if (!text.trim()) return;
    const message = {
      roomId,
      sender: user.username,
      content: text,
      timestamp: new Date().toISOString(),
    };
    socketRef.current.emit('sendMessage', message);
    setMessages((prev) => [...prev, message]);
  };

  return {
    messages,
    sendMessage,
  };
};

export { useChat };
export default useChat;
