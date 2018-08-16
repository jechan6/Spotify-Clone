import {RECEIVE_ARTIST_INFO} from "../actions/artist_action";

const artistReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ARTIST_INFO:
      return action.payload.artist;
    default:
      return state;
  }
}

export default artistReducer;
