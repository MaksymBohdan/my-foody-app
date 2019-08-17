import types from './itemActionTypes';

const fetchSingleItemRequest = id => ({
  type: types.FETCH_SINGLE_ITEM_REQUEST,
  payload: id,
});

const fetchSingleItemSuccess = data => ({
  type: types.FETCH_SINGLE_ITEM_SUCCESS,
  payload: data,
});

const fetchSingleItemFailed = error => ({
  type: types.FETCH_SINGLE_ITEM_FAILED,
  payload: error,
});

export default {
  fetchSingleItemRequest,
  fetchSingleItemSuccess,
  fetchSingleItemFailed,
};
