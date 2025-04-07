// Sidebar.js
import React from 'react';
import { FaFileAlt, FaComments, FaSignOutAlt } from 'react-icons/fa';
import '../styles/main.css';

const Sidebar = ({ onSelect, onLogout, active }) => {
  return (
    <div className="sidebar">
      <div className={`sidebar-item ${active === 'editor' ? 'active' : ''}`} onClick={() => onSelect('editor')}>
        <FaFileAlt /> <span>Editor</span>
      </div>
      <div className={`sidebar-item ${active === 'chat' ? 'active' : ''}`} onClick={() => onSelect('chat')}>
        <FaComments /> <span>Chat</span>
      </div>
      <div className="sidebar-item logout" onClick={onLogout}>
        <FaSignOutAlt /> <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
