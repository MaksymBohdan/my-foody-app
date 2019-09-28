import axios from 'axios';
import actions from './authActions';

axios.defaults.baseURL = 'http://localhost:4040';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

const signUp = credentials => async dispatch => {
  dispatch(actions.signUpRequest());
  try {
    const response = await axios.post('/auth/signup', credentials);
    setAuthHeader(response.data.token);

    await dispatch(actions.signUpSuccess(response.data));
  } catch (error) {
    dispatch(actions.signUpFailed(error));
  }
};

const signIn = credentials => async dispatch => {
  dispatch(actions.signInRequest());
  try {
    const response = await axios.post('/auth/signin', credentials);
    setAuthHeader(response.data.token);

    await dispatch(actions.signInSuccess(response.data));
  } catch (error) {
    dispatch(actions.signInFailed(error));
  }
};

const signOut = () => async dispatch => {
  dispatch(actions.signOutRequest());
  try {
    await axios.post('auth/signout');

    clearAuthHeader();

    dispatch(actions.signOutSuccess());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default { signUp, signIn, signOut };
