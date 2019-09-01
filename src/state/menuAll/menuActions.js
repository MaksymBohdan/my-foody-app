// @flow
import types from './menuActionTypes';
import type {
  FetchAllRequestAction,
  FetchAllSuccessPayload,
  FetchAllSuccessAction,
  ErrorAction,
  ErrorPayload,
} from '../../configs/flowTypes/state/actions';

const fetchAllRequest = (): FetchAllRequestAction => ({
  type: types.FETCH_ALL_REQUEST,
});

const fetchAllSuccess = (
  data: FetchAllSuccessPayload,
): FetchAllSuccessAction => ({
  type: types.FETCH_ALL_SUCCESS,
  payload: data,
});

const fetchAllFailed = (error: ErrorPayload): ErrorAction => ({
  type: types.FETCH_ALL_FAILED,
  payload: error,
});

export default {
  fetchAllRequest,
  fetchAllSuccess,
  fetchAllFailed,
};
