import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/groceries',
});

export const addGrocery = (data) => API.post('/add', data);
export const getGroceries = () => API.get('/');
export const getNearExpiry = () => API.get('/near-expiry');
