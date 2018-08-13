import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST} from '../../actions/playlist_actions';
import merge from 'lodash/merge';
const playlistReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.payload.playlist);
    case REMOVE_PLAYLIST:
      let newPlaylist = merge({}, state);
      delete newPlaylist[action.playlistId];
      return newPlaylist;
    default:
      return state;
  }
};
export default playlistReducer;
