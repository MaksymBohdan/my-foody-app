import axios from 'axios';
import { baseUrl, menuPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllMenuItems = async () => {
  const response = await axios.get(menuPath);

  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`${menuPath}/${id}`);

  return response.data;
};

const getMenuItemByCategory = async category => {
  if (category === 'all' || !category) return getAllMenuItems();

  const response = await axios.get(`${menuPath}?category=${category}`);

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

export { getMenuItemById, deleteMenuItem, addMenuItem, getMenuItemByCategory };
