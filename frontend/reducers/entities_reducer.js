import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs/song_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer
});

export default entitiesReducer;
