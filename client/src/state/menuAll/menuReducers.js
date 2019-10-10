// @flow
import { combineReducers } from 'redux';
import types from './menuActionTypes';
import type {
  MenuItems,
  StateLoading,
  StateError,
  Entities,
} from '../../types/state/state';
import type {
  FetchAllSuccessAction,
  LoadingAction,
  ErrorAction,
} from '../../types/state/actions';

import type {
  CombineReducersMenuAll,
  ReducerDefaultAction,
} from '../../types/state/reducer';

const menuReducers = (
  state: MenuItems = [],
  { type, payload }: FetchAllSuccessAction,
) => {
  switch (type) {
    case types.FETCH_ALL_SUCCESS:
      return payload.ids;

    default:
      return state;
  }
};

const loadingReducer = (
  state: StateLoading = false,
  { type }: LoadingAction,
) => {
  switch (type) {
    case types.FETCH_ALL_REQUEST:
      return true;

    case types.FETCH_ALL_FAILED:
    case types.FETCH_ALL_SUCCESS:
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
    case types.FETCH_ALL_FAILED:
      return payload;

    case types.FETCH_ALL_REQUEST:
    case types.FETCH_ALL_SUCCESS:
      return null;

    default:
      return state;
  }
};
export const menuReducer = combineReducers<
  CombineReducersMenuAll,
  ReducerDefaultAction,
>({
  items: menuReducers,
  loading: loadingReducer,
  error: errorReducer,
});

export const menuEntitiesReducer = (
  state: { menu: Entities } = {},
  { payload }: FetchAllSuccessAction,
) => {
  if (payload && payload.entities) {
    return payload.entities;
  }
  return state;
};
