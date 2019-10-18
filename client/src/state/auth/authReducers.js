// @flow
import { combineReducers } from 'redux';
import types from './authActionTypes';
import type { CombineReducersAuth } from '../../types/state/reducer';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
    case types.REFRESH_CURRENT_USER_SUCCESS:
      return payload.user;

    case types.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
    case types.REFRESH_CURRENT_USER_SUCCESS:
      return true;

    case types.SIGN_UP_FAILED:
    case types.SIGN_IN_FAILED:
    case types.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
      return payload.token;

    case types.SIGN_UP_FAILED:
    case types.SIGN_IN_FAILED:
    case types.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers<CombineReducersAuth, *>({
  user,
  isAuthenticated,
  token,
});
