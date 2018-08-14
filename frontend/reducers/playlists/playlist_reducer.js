import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST, REMOVE_SONG} from '../../actions/playlist_actions';
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
    case REMOVE_SONG:
      let newArr = merge({}, state);
      let playlist = newArr[action.playlistSong.playlist_id];
      let songIds = playlist.songIds;
      let index = songIds.indexOf(action.playlistSong.song_id);
      songIds.splice(index,1);

      return newArr;
    default:
      return state;
  }
};
export default playlistReducer;
