// Footer.js
import React from 'react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Real-Time Collaboration App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
