
export const selectSongsFromAlbum = (state, album) => {
  return album.songIds.map(id => state.entities.songs[id]);
};
