export const RECEIVE_VOLUME = "RECEIVE_VOLUME";
export const RECEIVE_TITLE = "RECEIVE_TITLE";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PLAYLISTID = "RECEIVE_PLAYLISTID";
export const RECEIVE_ALBUMID = "RECEIVE_ALBUMID";
export const RECEIVE_SONG_PLAYING = 'RECEIVE_SONG_PLAYING';
export const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME';
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
export const setSongPlaying = song => ({
  type: RECEIVE_SONG_PLAYING,
  song
});
export const setCurrentTime = time => ({
  type: RECEIVE_CURRENT_TIME,
  time
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
