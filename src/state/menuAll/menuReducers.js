import { combineReducers } from 'redux';
import types from './menuActionTypes';

const menuReducers = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL_SUCCESS:
      return payload.ids;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
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

const errorReducer = (state = null, { type, payload }) => {
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
export const menuReducer = combineReducers({
  items: menuReducers,
  loading: loadingReducer,
  error: errorReducer,
});

export const menuEntitiesReducer = (state = {}, { payload }) => {
  if (payload && payload.entities) {
    return payload.entities;
  }
  return state;
};
