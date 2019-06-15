import axios from 'axios';

const BASE_URL = 'http://localhost:3000/menu';

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
