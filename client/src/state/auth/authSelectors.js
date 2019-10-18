// @flow
import type { Selector } from '../../types/state/selector';
import type { IsAuthenticated, User, Token } from '../../types/state/state';

const isAuthenticated: Selector<IsAuthenticated> = state =>
  state.auth.isAuthenticated;
const user: Selector<User> = state => state.auth.user;
const getToken: Selector<Token> = state => state.auth.token;

export default { isAuthenticated, user, getToken };
