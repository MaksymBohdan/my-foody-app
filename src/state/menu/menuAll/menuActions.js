import types from './menuActionTypes';

const fetchAllRequest = () => ({
  type: types.FETCH_ALL_REQUEST,
});

const fetchAllSuccess = data => ({
  type: types.FETCH_ALL_SUCCESS,
  payload: data,
});

const fetchAllFailed = error => ({
  type: types.FETCH_ALL_FAILED,
  payload: error,
});

const deleteRequest = () => ({
  type: types.DELETE_REQUEST,
});

const deleteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const deleteFailed = error => ({
  type: types.DELETE_FAILED,
  payload: error,
});

export default {
  fetchAllRequest,
  fetchAllSuccess,
  fetchAllFailed,
  deleteRequest,
  deleteSuccess,
  deleteFailed,
};
