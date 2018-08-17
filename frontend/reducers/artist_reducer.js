import {RECEIVE_ARTIST_INFO, RECEIVE_ALL_ARTISTS} from "../actions/artist_action";
import merge from 'lodash/merge';
const artistReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ARTIST_INFO:
      return merge({},state,action.payload.artist);
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    default:
      return state;
  }
}

export default artistReducer;
