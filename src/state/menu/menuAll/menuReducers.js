import { combineReducers } from 'redux';
import types from './menuActionTypes';

const menuReducers = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL_SUCCESS:
      return payload;

    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_ALL_REQUEST:
    case types.DELETE_REQUEST:
      return true;

    case types.FETCH_ALL_FAILED:
    case types.FETCH_ALL_SUCCESS:
    case types.DELETE_SUCCESS:
    case types.DELETE_FAILED:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL_FAILED:
    case types.DELETE_FAILED:
      return payload;

    case types.FETCH_ALL_REQUEST:
    case types.FETCH_ALL_SUCCESS:
    case types.DELETE_REQUEST:
    case types.DELETE_SUCCESS:
      return null;

    default:
      return state;
  }
};
export default combineReducers({
  items: menuReducers,
  loading: loadingReducer,
  error: errorReducer,
});
