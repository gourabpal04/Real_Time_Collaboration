// utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
  withCredentials: true,
});

// Attach token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (credentials) => API.post('/api/auth/login', credentials);
export const register = (userInfo) => API.post('/api/auth/register', userInfo);
export const fetchUser = () => API.get('/api/auth/user');

// Additional auth functions for compatibility
export const loginUser = (credentials) => API.post('/api/auth/login', credentials);
export const registerUser = (userInfo) => API.post('/api/auth/register', userInfo);

export const saveDocument = (docId, content) => API.post(`/api/docs/${docId}`, { content });
export const loadDocument = (docId) => API.get(`/api/docs/${docId}`);

export const sendMessage = (chatRoomId, message) =>
  API.post(`/api/chat/${chatRoomId}`, { message });
export const fetchMessages = (chatRoomId) => API.get(`/api/chat/${chatRoomId}`);

export default API;
