import {RECEIVE_SONG, RECEIVE_SONGS} from '../../actions/song_action';
import merge from 'lodash/merge';
const songsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song})
    default:
      return state;
  }
};

export default songsReducer;
