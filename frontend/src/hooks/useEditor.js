// useEditor.js
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import axios from '../utils/api';

const useEditor = (docId) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const socketRef = useRef(null);

  // Load initial document
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await axios.get(`/api/editor/${docId}`);
        setContent(res.data.content);
        setTitle(res.data.title);
      } catch (err) {
        console.error('Error fetching document:', err);
      }
    };
    fetchDocument();
  }, [docId]);

  // Connect to socket
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');

    socketRef.current.emit('joinDocument', docId);

    socketRef.current.on('receiveChanges', (newContent) => {
      setContent(newContent);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [docId]);

  // Emit changes to others
  const sendChanges = (newContent) => {
    setContent(newContent);
    socketRef.current.emit('sendChanges', { docId, content: newContent });
  };

  // Save document
  const saveDocument = async () => {
    try {
      await axios.put(`/api/editor/${docId}`, {
        title,
        content,
      });
    } catch (err) {
      console.error('Error saving document:', err);
    }
  };

  return {
    content,
    title,
    setTitle,
    sendChanges,
    saveDocument,
  };
};

export default useEditor;
