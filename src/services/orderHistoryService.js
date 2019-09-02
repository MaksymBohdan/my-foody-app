// @flow
import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type {
  OrderHistory,
  DeleteOrderHistory,
  PostOrderHistory,
} from '../configs/flowTypes/orderHistory';
import { baseUrl, orderHistoryPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllOrdersHistory = async (): AxiosPromise<Array<OrderHistory>> => {
  const response = await axios.get(orderHistoryPath);

  return response.data;
};

const deleteItemOrderHistory = async (
  id: string,
): AxiosPromise<DeleteOrderHistory> => {
  const response = await axios.delete(`${orderHistoryPath}/${id}`);

  return response.status === 200;
};

const getItemOrderHistoryById = async (
  id: string,
): AxiosPromise<OrderHistory> => {
  const response = await axios.get(`${orderHistoryPath}/${id}`);

  return response.data;
};

const postItemOrderHistory = async (
  order: OrderHistory,
): AxiosPromise<Array<PostOrderHistory>> => {
  const response = await axios.post(orderHistoryPath, order);
  // eslint-disable-next-line no-unused-vars
  const { data, status, ...rest } = response;
  return { data, status };
};

export {
  getAllOrdersHistory,
  deleteItemOrderHistory,
  getItemOrderHistoryById,
  postItemOrderHistory,
};
