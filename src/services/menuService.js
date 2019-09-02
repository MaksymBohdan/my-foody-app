// @flow
import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type { Entity } from '../configs/flowTypes/state/state';
import { baseUrl, menuPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllMenuItems = async (): AxiosPromise<Array<Entity>> => {
  const response = await axios.get(menuPath);

  return response.data;
};

const getMenuItemById = async (id: string): AxiosPromise<Entity> => {
  const response = await axios.get(`${menuPath}/${id}`);

  return response.data;
};

const getMenuItemByCategory = async (
  category: ?string,
): AxiosPromise<Array<Entity>> => {
  if (category === 'all' || !category) return getAllMenuItems();

  const response = await axios.get(`${menuPath}?category=${category}`);

  return response.data;
};

export { getMenuItemById, getMenuItemByCategory };
