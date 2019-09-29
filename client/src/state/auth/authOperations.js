import axios from 'axios';
import actions from './authActions';
import { authSelectors } from '.';

const axiosAuth = axios.create({
  baseURL: 'http://localhost:4040',
});

const setAuthHeader = token => {
  axiosAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosAuth.defaults.headers.common.Authorization = null;
};

const signUp = credentials => async dispatch => {
  dispatch(actions.signUpRequest());
  try {
    const response = await axiosAuth.post(`/auth/signup`, credentials);
    setAuthHeader(response.data.token);

    await dispatch(actions.signUpSuccess(response.data));
  } catch (error) {
    clearAuthHeader();
    dispatch(actions.signUpFailed(error));
  }
};

const signIn = credentials => async dispatch => {
  dispatch(actions.signInRequest());
  try {
    const response = await axiosAuth.post('/auth/signin', credentials);
    setAuthHeader(response.data.token);

    await dispatch(actions.signInSuccess(response.data));
  } catch (error) {
    clearAuthHeader();
    dispatch(actions.signInFailed(error));
  }
};

const signOut = () => async dispatch => {
  dispatch(actions.signOutRequest());
  try {
    await axiosAuth.post('/auth/signout');

    clearAuthHeader();

    dispatch(actions.signOutSuccess());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const refreshUser = () => async (dispatch, getState) => {
  dispatch(actions.refreshUserRequest());
  try {
    const token = authSelectors.getToken(getState());

    if (!token) return;

    setAuthHeader(token);

    const { data } = await axiosAuth.get('/auth/current');

    await dispatch(actions.refreshUserSuccess(data));
  } catch (error) {
    clearAuthHeader();
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default { signUp, signIn, signOut, refreshUser };
