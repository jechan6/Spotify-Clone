import React from 'react';
import ReactDOM from 'react-dom';
//Components
import {login, logout,signup} from './actions/session_action';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSongs} from './actions/song_action';
import {fetchAlbums, fetchAlbum} from './actions/album_actions';
import {setVolume} from './actions/audio_action';
import {updatePlaylist, fetchPlaylists, fetchPlaylist, deletePlaylist, deleteSong} from './actions/playlist_actions';
document.addEventListener('DOMContentLoaded', () =>{
  let store;

  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.setVolume = setVolume;
  window.deleteSong = deleteSong;
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbum = fetchAlbum;
  window.fetchSongs = fetchSongs;
  window.fetchPlaylist = fetchPlaylist;
  window.fetchPlaylists = fetchPlaylists;
  window.deletePlaylist = deletePlaylist;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
