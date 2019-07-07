import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
const currentPath = '/order-history';

const getAllOrdersHistory = async () => {
  const response = await axios.get(currentPath);

  return response.data;
};

const deleteItemOrderHistory = async id => {
  const response = await axios.delete(`${currentPath}/${id}`);

  return response.status === 200;
};

const getItemOrderHistoryById = async id => {
  const response = await axios.get(`${currentPath}/${id}`);

  return response.data;
};

const postItemOrderHistory = async data => {
  const response = await axios.post(currentPath, data);

  return response;
};
export {
  getAllOrdersHistory,
  deleteItemOrderHistory,
  getItemOrderHistoryById,
  postItemOrderHistory,
};
