import { combineReducers } from 'redux';
import types from './categoryActionTypes';

const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
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

const errorReducer = (state = null, { type, payload }) => {
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

export default combineReducers({
  item: categoryReducer,
  loading: loadingReducer,
  error: errorReducer,
});
