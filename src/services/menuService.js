import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
const menuPath = '/menu';

const getAllMenuItems = async () => {
  const response = await axios.get(menuPath);

  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`${menuPath}/${id}`);

  return response.data;
};

const deleteMenuItem = async id => {
  const response = await axios.delete(`${menuPath}/${id}`);

  return response.status === 200;
};

const addMenuItem = async item => {
  const response = await axios.post(menuPath, item);

  return response.data;
};

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
