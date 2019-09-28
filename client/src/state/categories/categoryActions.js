// @flow
import types from './categoryActionTypes';
import type {
  CategoryRequestAction,
  ErrorAction,
  CategoryFetchSuccessAction,
  Category,
  ErrorPayload,
} from '../../configs/flowTypes/state/actions';

const fetchCategoriesRequest = (): CategoryRequestAction => ({
  type: types.FETCH_REQUEST,
});

const fetchCategoriesSuccess = (
  categories: Category,
): CategoryFetchSuccessAction => ({
  type: types.FETCH_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailed = (error: ErrorPayload): ErrorAction => ({
  type: types.FETCH_FAILED,
  payload: error,
});

export default {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
};
