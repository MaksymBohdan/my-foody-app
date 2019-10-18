// @flow
import axios from 'axios';
import type {
  SignUpCredentials,
  SignInCredentials,
} from '../types/state/actions';

const axiosAuth = axios.create({
  baseURL: 'http://localhost:4040',
});

const setAuthHeader = (token: string) => {
  axiosAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosAuth.defaults.headers.common.Authorization = null;
};

const createNewAccount = async (credentials: SignUpCredentials) => {
  const response = await axiosAuth.post(`/auth/signup`, credentials);

  return response.data;
};

const signInRequest = async (credentials: SignInCredentials) => {
  const response = await axiosAuth.post('/auth/signin', credentials);

  return response.data;
};

const signOutRequest = async () => {
  const response = await axiosAuth.post('/auth/signout');

  return response.data;
};

const refreshUserRequest = async () => {
  const response = await axiosAuth.get('/auth/current');

  return response.data;
};

export {
  setAuthHeader,
  clearAuthHeader,
  createNewAccount,
  signInRequest,
  signOutRequest,
  refreshUserRequest,
};
