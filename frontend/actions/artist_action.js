import * as ArtistUtil from '../util/artist_util';
export const RECEIVE_ARTIST_INFO = 'RECEIVE_ARTIST_INFO';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
const receiveArtist = payload => ({
  type: RECEIVE_ARTIST_INFO,
  payload
});

const receiveArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
})
export const fetchArtist = id => dispatch => (
  ArtistUtil.fetchArtist(id)
    .then((artist) => dispatch(receiveArtist(artist)))
);

export const fetchArtists = () => dispatch => (
  ArtistUtil.fetchArtists()
    .then((artists) => dispatch(receiveArtists(artists)))
)
