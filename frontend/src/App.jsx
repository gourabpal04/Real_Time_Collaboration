import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Editor from './components/Editor.jsx';
import ChatBox from './components/ChatBox.jsx';
import Auth from './components/Auth.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useAuth } from './hooks/useAuth';
import './styles/main.css';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          {isAuthenticated && <Sidebar />}
          <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? <Navigate to="/editor" /> : <Auth />
                }
              />
              <Route
                path="/editor"
                element={
                  isAuthenticated ? <Editor /> : <Navigate to="/" />
                }
              />
              <Route
                path="/chat"
                element={
                  isAuthenticated ? <ChatBox /> : <Navigate to="/" />
                }
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
