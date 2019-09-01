// @flow
import types from './itemActionTypes';
import type {
  FetchSingleItemRequestAction,
  FetchSingleItemSuccessPayload,
  FetchSingleItemSuccessAction,
  ErrorPayload,
  ErrorAction,
} from '../../configs/flowTypes/state/actions';

const fetchSingleItemRequest = (): FetchSingleItemRequestAction => ({
  type: types.FETCH_SINGLE_ITEM_REQUEST,
});

const fetchSingleItemSuccess = (
  data: FetchSingleItemSuccessPayload,
): FetchSingleItemSuccessAction => ({
  type: types.FETCH_SINGLE_ITEM_SUCCESS,
  payload: data,
});

const fetchSingleItemFailed = (error: ErrorPayload): ErrorAction => ({
  type: types.FETCH_SINGLE_ITEM_FAILED,
  payload: error,
});

export default {
  fetchSingleItemRequest,
  fetchSingleItemSuccess,
  fetchSingleItemFailed,
};
