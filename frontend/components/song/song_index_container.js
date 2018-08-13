import {connect} from 'react-redux';
import {fetchSongs} from '../../actions/song_action';
import SongIndex from './song_index';
import {receiveCurrentSong, receiveNextSong} from "../../actions/song_action";
import {updatePlaylist} from "../../actions/playlist_actions";
import {openModal} from "../../actions/modal_actions";
import React from 'react';
const mapStateToProps = ({entities}, ownProps) => {
  let songs =Object.values(entities.songs);
  if(ownProps.songs.length > 0) {
    songs = ownProps.songs
  }
  return {songs: songs};
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  receiveNextSong: (song) => dispatch(receiveNextSong(song)),
  updatePlaylist: (id, songId) => dispatch(updatePlaylist(id, songId)),
  otherForm: (
    <button
    className="menu-item"
    onClick={() => dispatch(openModal('song_playlistform'))}>
      Add to Playlist
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
