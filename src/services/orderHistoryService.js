import axios from 'axios';
import { baseUrl, orderHistoryPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllOrdersHistory = async () => {
  const response = await axios.get(orderHistoryPath);

  return response.data;
};

const deleteItemOrderHistory = async id => {
  const response = await axios.delete(`${orderHistoryPath}/${id}`);

  return response.status === 200;
};

const getItemOrderHistoryById = async id => {
  const response = await axios.get(`${orderHistoryPath}/${id}`);

  return response.data;
};

const postItemOrderHistory = async data => {
  const response = await axios.post(orderHistoryPath, data);

  return response;
};
export {
  getAllOrdersHistory,
  deleteItemOrderHistory,
  getItemOrderHistoryById,
  postItemOrderHistory,
};
