// utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

// Attach token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const register = (userInfo) => API.post('/auth/register', userInfo);
export const fetchUser = () => API.get('/auth/user');

export const saveDocument = (docId, content) => API.post(`/docs/${docId}`, { content });
export const loadDocument = (docId) => API.get(`/docs/${docId}`);

export const sendMessage = (chatRoomId, message) =>
  API.post(`/chat/${chatRoomId}`, { message });
export const fetchMessages = (chatRoomId) => API.get(`/chat/${chatRoomId}`);

export default API;
