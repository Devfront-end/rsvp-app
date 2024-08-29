import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token, refreshToken, user } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await api.post('/auth/signup', { name, email, password });
    const { token, refreshToken, user } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const updateProfile = async (userData) => {
  try {
    const response = await api.put('/auth/profile', userData);
    const updatedUser = response.data;
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return updatedUser;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const refreshAuthToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token available');
    
    const response = await api.post('/auth/refresh-token', { refreshToken });
    const { token } = response.data;
    localStorage.setItem('authToken', token);
    return token;
  } catch (error) {
    logout(); // Clear local storage if refresh fails
    throw error.response ? error.response.data : error.message;
  }
};