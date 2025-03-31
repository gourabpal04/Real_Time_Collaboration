import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./ChatBox.css";

const socket = io("http://localhost:5000");

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("message");
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: "You",
        timestamp: new Date().toLocaleTimeString()
      };
      socket.emit("message", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "You" ? "my-message" : "other-message"}`}>
            <span className="sender">{msg.sender}</span>
            <p>{msg.text}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
