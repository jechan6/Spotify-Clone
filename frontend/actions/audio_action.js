export const RECEIVE_VOLUME = "RECEIVE_VOLUME";
export const RECEIVE_TITLE = "RECEIVE_TITLE";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PLAYLISTID = "RECEIVE_PLAYLISTID";
export const RECEIVE_ALBUMID = "RECEIVE_ALBUMID";
export const setVolume = (volume) => ({
  type: RECEIVE_VOLUME,
  volume
});

export const setTitle = title => ({
  type: RECEIVE_TITLE,
  title
});

export const setAlbumId = albumId => ({
  type: RECEIVE_ALBUMID,
  albumId
});

export const setPlaylistId = playlistId => ({
  type: RECEIVE_PLAYLISTID,
  playlistId
})
export const setPhotoUrl = photoUrl => ({
  type: RECEIVE_PHOTO,
  photoUrl
});
export const setArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})
