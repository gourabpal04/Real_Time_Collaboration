// Auth.js
import React, { useState } from 'react';
import { loginUser, registerUser } from '../utils/api';
import { validateEmail, validatePassword } from '../utils/validators';
import '../styles/main.css';

const Auth = ({ onAuth }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ email: '', password: '', username: '' });
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!validateEmail(form.email) || !validatePassword(form.password)) {
      setError('Invalid email or password (min 6 chars)');
      return;
    }
    try {
      const data = isRegister
        ? await registerUser(form)
        : await loginUser({ email: form.email, password: form.password });
      onAuth(data);
    } catch (err) {
      setError(err.message || 'Authentication failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      {isRegister && (
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      {error && <p className="error-msg">{error}</p>}
      <button onClick={handleSubmit}>{isRegister ? 'Register' : 'Login'}</button>
      <p onClick={toggleMode} className="toggle-link">
        {isRegister ? 'Already have an account? Login' : 'New here? Register'}
      </p>
    </div>
  );
};

export default Auth;
