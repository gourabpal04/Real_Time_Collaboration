// Header.js
import React from 'react';
import '../styles/main.css';

const Header = ({ username }) => {
  return (
    <header className="header">
      <h1>Real-Time Collaboration</h1>
      <div className="user-info">
        <span>👤 {username}</span>
      </div>
    </header>
  );
};

export default Header;
