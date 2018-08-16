import * as ArtistUtil from '../util/artist_util';
export const RECEIVE_ARTIST_INFO = 'RECEIVE_ARTIST_INFO';

const receiveArtist = payload => ({
  type: RECEIVE_ARTIST_INFO,
  payload
});

export const fetchArtist = id => dispatch => (
  ArtistUtil.fetchArtist(id)
    .then((artist) => dispatch(receiveArtist(artist)))
);
