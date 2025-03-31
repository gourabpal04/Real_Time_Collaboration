import React, { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Editor = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setText(data);
    });

    return () => socket.off("message");
  }, []);

  const handleChange = useCallback((e) => {
    const newText = e.target.value;
    setText(newText);
    socket.emit("message", newText);
  }, []);

  return (
    <div className="editor-container">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        className="editor"
      />
    </div>
  );
};

export default Editor;
