// filepath: /Users/conniechen/Documents/cse481l/project-c/project-c/interview-assistant/client/src/App.jsx
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Interview from './components/Interview';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import './App.css';

const AuthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  if (!currentUser) {
    return (
      <div className="auth-container">
        <div className="auth-toggle">
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <Login /> : <SignUp />}
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <span style={{ marginRight: '10px' }}>
          {currentUser.email}
        </span>
        <button 
          onClick={handleLogout}
          style={{
            padding: '5px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      <Interview />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
};

export default App;