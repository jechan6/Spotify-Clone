export const RECEIVE_VOLUME = "RECEIVE_VOLUME";
export const RECEIVE_TITLE = "RECEIVE_TITLE";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const setVolume = (volume) => ({
  type: RECEIVE_VOLUME,
  volume
});

export const setTitle = title => ({
  type: RECEIVE_TITLE,
  title
});

export const setPhotoUrl = photoUrl => ({
  type: RECEIVE_PHOTO,
  photoUrl
});
export const setArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})
