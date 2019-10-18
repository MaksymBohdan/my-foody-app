// @flow
import types from './authActionTypes';
import type {
  ErrorPayload,
  SignUpCredentials,
  SignInCredentials,
  User,
} from '../../types/state/actions';

const signUpRequest = () => ({
  type: types.SIGN_UP_REQUEST,
});

const signUpSuccess = (credentials: SignUpCredentials) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: credentials,
});

const signUpFailed = (error: ErrorPayload) => ({
  type: types.SIGN_UP_FAILED,
  payload: error,
});

const signInRequest = () => ({
  type: types.SIGN_IN_REQUEST,
});

const signInSuccess = (credentials: SignInCredentials) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: credentials,
});

const signInFailed = (error: ErrorPayload) => ({
  type: types.SIGN_IN_FAILED,
  payload: error,
});

const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});

const refreshUserRequest = () => ({
  type: types.REFRESH_CURRENT_USER_REQUEST,
});

const refreshUserSuccess = (user: User) => ({
  type: types.REFRESH_CURRENT_USER_SUCCESS,
  payload: user,
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
  refreshUserRequest,
  refreshUserSuccess,
};
