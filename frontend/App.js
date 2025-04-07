import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Editor from './components/Editor';
import ChatBox from './components/ChatBox';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/editor/:docId" element={<Editor />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
