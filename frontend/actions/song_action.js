export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG'
import * as SongApiUtil from '../util/song_api_util';
const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveCurrentSong = song => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const receiveNextSong = song => ({
  type: RECEIVE_NEXT_SONG,
  song
});

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id).then(
    (song) => dispatch(receiveSong(song))
  )
);

export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs().then(
    (songs) => dispatch(receiveSongs(songs))
  )
);
