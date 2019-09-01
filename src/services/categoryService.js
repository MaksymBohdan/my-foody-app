// @flow

import axios from 'axios';
import { baseUrl, menuCategoriesPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllCategories = async () => {
  const response = await axios.get(menuCategoriesPath);

  return response.data;
};

export default getAllCategories;
