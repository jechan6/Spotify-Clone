import {connect} from 'react-redux';
import {fetchSongs} from '../../actions/song_action';
import SongIndex from './song_index';
import {receiveCurrentSong, receiveNextSong} from "../../actions/song_action";
import {updatePlaylist, deleteSong} from "../../actions/playlist_actions";
import {setPhotoUrl, setPlaylistId, setAlbumId} from "../../actions/audio_action";
import {setTitle, setArtist} from "../../actions/audio_action";
import {openModal} from "../../actions/modal_actions";
import {withRouter} from "react-router-dom";
import React from 'react';
const mapStateToProps = ({entities}, ownProps) => {
  let songs = Object.values(entities.songs);
  if(ownProps.songs == -1) {
    songs = [];
  } else if(ownProps.songs && ownProps.songs.length > 0) {
    songs = ownProps.songs;
  }

  return {songs: songs, addButton: ownProps.addButton,
    playlistId: ownProps.match.params.playlistId,
    photoUrl: ownProps.photoUrl};
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  receiveNextSong: (song) => dispatch(receiveNextSong(song)),
  updatePlaylist: (id, songId) => dispatch(updatePlaylist(id, songId)),
  deleteSong: (playlistSong) => dispatch(deleteSong(playlistSong)),
  setPhotoUrl: (photo) => dispatch(setPhotoUrl(photo)),
  setPlaylistId: id => dispatch(setPlaylistId(id)),
  setAlbumId: id => dispatch(setAlbumId(id)),
  setTitle: title => dispatch(setTitle(title)),
  setArtist: artist => dispatch(setArtist(artist)),
  otherForm: (
    <button
    className="menu-item"
    onClick={(event) => dispatch(openModal('song_playlistform', event.currentTarget.parentElement.attributes.value.value))}>
      Add to Playlist
    </button>
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongIndex));
