export const selectSongsFromPayload = (state, payload) => {

    return payload.songIds.map(id => state.entities.songs[id]);

};

export const selectAlbumsFromArtist = (state, artistId) => {
  return Object.values(state.entities.albums).filter(album => album.artist_id === artistId);
}
export const selectAlbumIdFromName = (state, name) => {
  return Object.values(state.entities.albums).forEach(album => {
    if(album.artist === name) {
      return album.artist_id;
    }
  })
}
export const selectArtistFromName = (state, name) => {
  let artists = Object.values(state.entities.artist);
  let i = 0;
  while(i < artists.length) {
    if (artists[i].name === name) {
      return artists[i];
    }
    i++;
  }
  
 
}
export const selectUserPlaylist = (state, playlist) => {
   let currentUser = state.entities.users[state.session.id]

   return Object.values(playlist).filter(playlist => currentUser.id === playlist.author_id);

}
export const selectPlaylistFromUser = (state, playlist) => {
  let currentUser = state.entities.users[state.session.id]

  return Object.values(playlist).filter(playlist => (currentUser.id === playlist.author_id ||
    (playlist.followers && Object.values(playlist.followers).includes(currentUser.id))
  ));
}
