export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
import * as AlbumUtil from '../util/album_api_util';

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

const receiveAlbum = payload => ({
  type: RECEIVE_ALBUM,
  payload
});

export const fetchAlbum = id => dispatch => (
  AlbumUtil.fetchAlbum(id)
    .then((album) => dispatch(receiveAlbum(album)))
);

export const fetchAlbums = () => dispatch => (
  AlbumUtil.fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)))
);
