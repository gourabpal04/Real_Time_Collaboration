import React, { useState } from "react";
import Editor from "./Editor";
import ChatBox from "./ChatBox";
import "./App.css";

const App = () => {
  const [showEditor, setShowEditor] = useState(true);
  const [showChat, setShowChat] = useState(true);

  const toggleEditor = () => setShowEditor((prev) => !prev);
  const toggleChat = () => setShowChat((prev) => !prev);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Real-Time Collaboration App</h1>
        <div className="toggle-buttons">
          <button onClick={toggleEditor}>{showEditor ? "Hide Editor" : "Show Editor"}</button>
          <button onClick={toggleChat}>{showChat ? "Hide Chat" : "Show Chat"}</button>
        </div>
      </header>
      <main className="main-content">
        {showEditor && <Editor />}
        {showChat && <ChatBox />}
      </main>
    </div>
  );
};

export default App;
