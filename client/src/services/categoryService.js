// @flow
import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type { CategoryItems } from '../configs/flowTypes/state/state';

import { baseUrl, menuCategoriesPath } from '../configs/services';

axios.defaults.baseURL = baseUrl;

const getAllCategories = async (): AxiosPromise<CategoryItems> => {
  const response = await axios.get(menuCategoriesPath);

  return response.data;
};

export default getAllCategories;
