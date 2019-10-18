// @flow
import actions from './authActions';
import selectors from './authSelectors';
import {
  setAuthHeader,
  clearAuthHeader,
  createNewAccount,
  signInRequest,
  signOutRequest,
  refreshUserRequest,
} from '../../services/authService';

import type {
  Dispatch,
  ThunkAction,
  GetState,
} from '../../types/state/operations';
import type {
  SignUpCredentials,
  SignInCredentials,
} from '../../types/state/actions';

const signUp = (credentials: SignUpCredentials): ThunkAction => async (
  dispatch: Dispatch,
) => {
  dispatch(actions.signUpRequest());

  try {
    const response = await createNewAccount(credentials);

    setAuthHeader(response.token);

    await dispatch(actions.signUpSuccess(response));
  } catch (error) {
    clearAuthHeader();

    dispatch(actions.signUpFailed(error));
  }
};

const signIn = (credentials: SignInCredentials): ThunkAction => async (
  dispatch: Dispatch,
) => {
  dispatch(actions.signInRequest());

  try {
    const response = await signInRequest(credentials);

    setAuthHeader(response.token);

    await dispatch(actions.signInSuccess(response));
  } catch (error) {
    clearAuthHeader();

    dispatch(actions.signInFailed(error));
  }
};

const signOut = () => async (dispatch: Dispatch) => {
  dispatch(actions.signOutRequest());

  try {
    await signOutRequest();

    clearAuthHeader();

    dispatch(actions.signOutSuccess());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const refreshUser = () => async (dispatch: Dispatch, getState: GetState) => {
  dispatch(actions.refreshUserRequest());

  try {
    const token = selectors.getToken(getState());

    if (!token) return;

    setAuthHeader(token);

    const response = await refreshUserRequest();

    await dispatch(actions.refreshUserSuccess(response));
  } catch (error) {
    clearAuthHeader();
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default { signUp, signIn, signOut, refreshUser };
