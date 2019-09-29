// @flow
import { combineReducers } from 'redux';

import types from './itemActionTypes';
import type {
  Entity,
  StateLoading,
  StateError,
} from '../../configs/flowTypes/state/state';
import type {
  FetchSingleItemSuccessAction,
  ErrorAction,
  LoadingAction,
} from '../../configs/flowTypes/state/actions';
import type {
  CombineReducersMenuItem,
  ReducerDefaultAction,
} from '../../configs/flowTypes/state/reducer';

const menuItemReducer = (
  state: Entity = {},
  { type, payload }: FetchSingleItemSuccessAction,
) => {
  switch (type) {
    case types.FETCH_SINGLE_ITEM_SUCCESS:
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
    case types.FETCH_SINGLE_ITEM_REQUEST:
      return true;

    case types.FETCH_SINGLE_ITEM_SUCCESS:
    case types.FETCH_SINGLE_ITEM_FAILED:
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
    case types.FETCH_SINGLE_ITEM_FAILED:
      return payload;

    case types.FETCH_SINGLE_ITEM_REQUEST:
    case types.FETCH_SINGLE_ITEM_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers<CombineReducersMenuItem, ReducerDefaultAction>({
  item: menuItemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
