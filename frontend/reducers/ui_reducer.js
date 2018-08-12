import {RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG} from "../actions/song_action";
import {RECEIVE_ALBUM, RECEIVE_ALBUMS} from '../actions/album_actions';
import merge from "lodash/merge";
const emptyState = {
  currentSong: null,
  nextSong: null
};

const UiReducer = (state = emptyState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return {currentSong: action.song};
    case RECEIVE_NEXT_SONG:
      return {currentSong: state.currentSong,
          nextSong: action.song};
    case RECEIVE_ALBUM:
      return merge({},state, {albumShow: true});
    case RECEIVE_ALBUMS:
      return merge({},state, {albumShow: false});
    default:
      return state;
  }
};

export default UiReducer;
