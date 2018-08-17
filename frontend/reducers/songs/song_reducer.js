import {RECEIVE_SONG, RECEIVE_SONGS} from '../../actions/song_action';
import {RECEIVE_ARTIST_INFO} from '../../actions/artist_action';
import merge from 'lodash/merge';
const songsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song});
    case RECEIVE_ARTIST_INFO:
      if(!action.payload.songs) return state;
      return merge({},state,action.payload.songs);
    default:
      return state;
  }
};

export default songsReducer;
