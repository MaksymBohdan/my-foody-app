import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const getAllMenuItems = () =>
  axios.get('/menu').then(response => response.data);

const getMenuItemById = id =>
  axios.get(`/menu/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`/menu/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post('/menu', item).then(response => response.data);

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
