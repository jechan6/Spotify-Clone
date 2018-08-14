export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const REMOVE_SONG = 'REMOVE_SONG';
import * as PlaylistApi from '../util/playlist_util';
const receivePlaylist = payload => ({
  type: RECEIVE_PLAYLIST,
  payload
});

const recievePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

const removeSong = (playlistSong) => {

  return ({
    type: REMOVE_SONG,
    playlistSong
  });
};

export const createPlaylist = playlist => dispatch => (
  PlaylistApi.createPlaylist(playlist)
    .then( (p) => dispatch(receivePlaylist(p)))
);

export const fetchPlaylist = id => dispatch => (
  PlaylistApi.fetchPlaylist(id)
    .then( (playlist) => dispatch(receivePlaylist(playlist)))
);

export const fetchPlaylists = () => dispatch => (
  PlaylistApi.fetchPlaylists()
    .then( (playlists) => dispatch(recievePlaylists(playlists)))
);

export const deleteSong = (playlistSong) => dispatch => (
  PlaylistApi.deleteSong(playlistSong)
    .then((playlistsong) => dispatch(removeSong(playlistsong)))
);
export const deletePlaylist = (id) => dispatch => (
  PlaylistApi.deletePlaylist(id)
    .then( (playlist) => dispatch(removePlaylist(playlist.id)))
);

export const updatePlaylist = (id, songId) => dispatch => (
  PlaylistApi.updatePlaylist(id, songId)
    .then((playlist) => dispatch(receivePlaylist(playlist)))
);
