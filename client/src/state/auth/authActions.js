import types from './authActionTypes';

const signUpRequest = () => ({
  type: types.SIGN_UP_REQUEST,
});

const signUpSuccess = credentials => ({
  type: types.SIGN_UP_SUCCESS,
  payload: credentials,
});

const signUpFailed = error => ({
  type: types.SIGN_UP_FAILED,
  payload: error,
});

const signInRequest = () => ({
  type: types.SIGN_IN_REQUEST,
});

const signInSuccess = credentials => ({
  type: types.SIGN_IN_SUCCESS,
  payload: credentials,
});

const signInFailed = error => ({
  type: types.SIGN_IN_FAILED,
  payload: error,
});

const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});

export default {
  signUpRequest,
  signUpSuccess,
  signUpFailed,
  signOutRequest,
  signOutSuccess,
  signInRequest,
  signInSuccess,
  signInFailed,
};
