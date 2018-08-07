import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS}
from '../actions/session_action';

const sessionErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
};

export default sessionErrorsReducer;
