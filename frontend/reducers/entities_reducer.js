import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs/song_reducer';
import albumsReducer from './albums/album_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer
});

export default entitiesReducer;
