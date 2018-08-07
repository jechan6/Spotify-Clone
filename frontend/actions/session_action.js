export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import * as APIUtil from '../util/session_api_util';
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  APIUtil.login(user)
  .then((userFromServer) => (dispatch(receiveCurrentUser(userFromServer))),
  err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then((user) => (dispatch(logOutCurrentUser())),
  err => dispatch(receiveErrors(err)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then((userFromServer) => (dispatch(receiveCurrentUser(userFromServer))),
  err => dispatch(receiveErrors(err)))
);
