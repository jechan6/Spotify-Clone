import {RECEIVE_SONG} from '../../actions/song_action';

const songsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SONG:
      return action.song;
    default:
      return state;
  }
};

export default songsReducer;
