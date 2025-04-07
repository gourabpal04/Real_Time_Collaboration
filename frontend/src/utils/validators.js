// utils/validators.js

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Minimum 8 characters, at least one letter and one number
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

export const validateUsername = (username) => {
  return username && username.length >= 3;
};

export const validateForm = ({ email, password, username }) => {
  const errors = {};
  if (!validateEmail(email)) errors.email = 'Invalid email address';
  if (!validatePassword(password)) errors.password = 'Password must be at least 8 characters with one number';
  if (username !== undefined && !validateUsername(username)) errors.username = 'Username must be at least 3 characters';
  return errors;
};
