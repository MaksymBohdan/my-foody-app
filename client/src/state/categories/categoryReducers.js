// @flow
import { combineReducers } from 'redux';
import types from './categoryActionTypes';
import type {
  CategoryItems,
  StateLoading,
  StateError,
} from '../../types/state/state';
import type {
  CategoryFetchSuccessAction,
  LoadingAction,
  ErrorAction,
} from '../../types/state/actions';

import type {
  CombineReducersCategory,
  ReducerDefaultAction,
} from '../../types/state/reducer';

const categoryReducer = (
  state: CategoryItems = [],
  { type, payload }: CategoryFetchSuccessAction,
) => {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (
  state: StateLoading = false,
  { type }: LoadingAction,
) => {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_FAILED:
      return false;

    default:
      return state;
  }
};

const errorReducer = (
  state: StateError = null,
  { type, payload }: ErrorAction,
) => {
  switch (type) {
    case types.FETCH_FAILED:
      return payload;

    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers<CombineReducersCategory, ReducerDefaultAction>({
  item: categoryReducer,
  loading: loadingReducer,
  error: errorReducer,
});
