import {RECEIVE_VOLUME, RECEIVE_TITLE, RECEIVE_ARTIST, RECEIVE_PHOTO
, RECEIVE_PLAYLISTID, RECEIVE_ALBUMID, RECEIVE_CURRENT_TIME, RECEIVE_SONG_PLAYING}
from '../actions/audio_action';
import {LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER} from '../actions/session_action';
import merge from "lodash/merge";

const audioReducer = (state={volume: 1}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {newUser: true};
    case RECEIVE_VOLUME:
      return {volume: action.volume};
    case RECEIVE_TITLE:
      return merge({}, state, {title: action.title, newUser: false});
    case RECEIVE_ARTIST:
      return merge({}, state, {artist: action.artist});
    case RECEIVE_PHOTO:
      return merge({}, state, {photoUrl: action.photoUrl});
    case RECEIVE_ALBUMID:
      return merge({}, state, {albumId: action.albumId, playlistId: -1});
    case RECEIVE_PLAYLISTID:
      return merge({}, state, {playlistId: action.playlistId, albumId: -1});
    case RECEIVE_CURRENT_TIME:
      return merge({}, state, {songTime: action.time});
    case RECEIVE_SONG_PLAYING:
      return merge({}, state, {songInPlay: action.song});
    default:
      return state;
  }
};
export default audioReducer;
