const isAuthenticated = state => state.auth.isAuthenticated;
const user = state => state.auth.user;
const getToken = state => state.auth.token;

export default { isAuthenticated, user, getToken };
