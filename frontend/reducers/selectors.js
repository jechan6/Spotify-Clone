export const selectSongsFromPayload = (state, payload) => {
  return payload.songIds.map(id => state.entities.songs[id]);
};
