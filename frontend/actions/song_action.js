export const RECEIVE_SONG = 'RECEIVE_SONG';
import * as SongApiUtil from '../util/song_api_util';
const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id).then(
    (song) => dispatch(receiveSong(song))
  )
);
