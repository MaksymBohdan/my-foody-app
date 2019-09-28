const isAuthenticated = state => state.auth.isAuthenticated;
const user = state => state.auth.user;

export default { isAuthenticated, user };
