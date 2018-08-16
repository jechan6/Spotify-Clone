export const selectSongsFromPayload = (state, payload) => {
  return payload.songIds.map(id => state.entities.songs[id]);
};

export const selectPlaylistFromUser = (state, playlist) => {
  let currentUser = state.entities.users[state.session.id]

  return Object.values(playlist).filter(playlist => (currentUser.id === playlist.author_id ||
    (playlist.followers && Object.values(playlist.followers).includes(currentUser.id))
  ));
}
