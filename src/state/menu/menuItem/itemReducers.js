import { combineReducers } from 'redux';
import types from './itemActionTypes';

const menuItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.FETCH_SINGLE_ITEM_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
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

const errorReducer = (state = null, { type, payload }) => {
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

export default combineReducers({
  item: menuItemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
