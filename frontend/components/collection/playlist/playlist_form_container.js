import {connect} from 'react-redux';
import PlaylistForm from './playlist_form';
import {createPlaylist} from '../../../actions/playlist_actions';
import { closeModal } from '../../../actions/modal_actions';
import React from 'react';
const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
