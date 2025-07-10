import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
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
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/auth" 
            element={isAuthenticated ? <Navigate to="/editor" /> : <Auth />} 
          />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <div className="flex flex-1">
                    <Sidebar />
                    <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                      <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to CollabBoard!</h1>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
                            <p className="text-gray-600">Your recent documents will appear here.</p>
                          </div>
                          <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4">Team Activity</h2>
                            <p className="text-gray-600">Recent team activity will be shown here.</p>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                  <Footer />
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/editor"
            element={
              isAuthenticated ? (
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <div className="flex flex-1">
                    <Sidebar />
                    <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                      <Editor />
                    </main>
                  </div>
                  <Footer />
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuthenticated ? (
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <div className="flex flex-1">
                    <Sidebar />
                    <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                      <ChatBox />
                    </main>
                  </div>
                  <Footer />
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          
          {/* Redirect authenticated users to dashboard */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
