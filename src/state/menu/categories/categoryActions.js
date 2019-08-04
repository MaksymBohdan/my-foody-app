import types from './categoryActionTypes';

const fetchCategoriesRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchCategoriesSuccess = categories => ({
  type: types.FETCH_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailed = error => ({
  type: types.FETCH_FAILED,
  payload: error,
});

export default {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
};
