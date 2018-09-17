import {connect} from 'react-redux';
import React from 'react';
import {updatePlaylist, fetchPlaylists} from '../../actions/playlist_actions';
import SongPlaylistform from './song_playlistform';
import {withRouter} from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import {openModal} from "../../actions/modal_actions";
import {selectUserPlaylist} from "../../reducers/selectors";

const mapStateToProps = state => {

  return {
    playlists: selectUserPlaylist(state, state.entities.playlist)
  };
};

const mapDispatchToProps = dispatch => {

  return {
    updatePlaylist: (id, songId) => dispatch(updatePlaylist(id,songId)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal("playlist_form"))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongPlaylistform));
