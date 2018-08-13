import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs/song_reducer';
import albumsReducer from './albums/album_reducer';
import playlistReducer from './playlists/playlist_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  playlist: playlistReducer
});

export default entitiesReducer;
