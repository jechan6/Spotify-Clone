import {RECEIVE_VOLUME} from '../actions/audio_action';
import merge from "lodash/merge";

const audioReducer = (state={volume: 1}, action) => {
  switch(action.type) {
    case RECEIVE_VOLUME:
      return {volume: action.volume};
    default:
      return state;
  }
};
export default audioReducer;
