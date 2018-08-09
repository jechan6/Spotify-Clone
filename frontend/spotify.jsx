import React from 'react';
import ReactDOM from 'react-dom';
//Components
import {login, logout,signup} from './actions/session_action';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSongs} from './actions/song_action';
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
  window.fetchSongs = fetchSongs;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
