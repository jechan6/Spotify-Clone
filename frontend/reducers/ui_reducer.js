import {RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG} from "../actions/song_action";
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
    default:
    return state;
  }
};

export default UiReducer;
