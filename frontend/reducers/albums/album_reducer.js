import {RECEIVE_ALBUM, RECEIVE_ALBUMS} from "../../actions/album_actions";
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return action.payload.album;
    default:
      return state;
  }
};

export default albumsReducer;
