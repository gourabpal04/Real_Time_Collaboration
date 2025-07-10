// Editor.js
import React, { useEffect, useRef } from 'react';
import { useEditor } from '../hooks/useEditor';
import '../styles/editor.css';

const Editor = ({ docId }) => {
  const { content, setContent, saveDocument, socket } = useEditor(docId);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!socket) return;

    socket.on('doc-update', ({ content }) => {
      setContent(content);
      editorRef.current.innerHTML = content;
    });

    return () => socket.off('doc-update');
  }, [socket, setContent]);

  const handleInput = (e) => {
    const htmlContent = e.currentTarget.innerHTML;
    setContent(htmlContent);
    socket.emit('doc-update', { docId, content: htmlContent });
  };

  const handleSave = () => {
    saveDocument(content);
  };

  return (
    <div className="editor-container">
      <div
        className="rich-editor"
        contentEditable
        ref={editorRef}
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <button className="save-btn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;
