// ChatBox.js
import React, { useEffect, useState, useRef } from 'react';
import { useChat } from '../hooks/useChat';
import '../styles/chat.css';

const ChatBox = ({ user, roomId }) => {
  const { messages, sendMessage, socket } = useChat(roomId);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage({ user, text: input });
      setInput('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.user === user ? 'own' : ''}`}>
            <span className="sender">{msg.user}</span>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
