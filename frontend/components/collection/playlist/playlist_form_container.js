import {connect} from 'react-redux';
import PlaylistForm from './playlist_form';
import {createPlaylist} from '../../../actions/playlist_actions';
import { closeModal } from '../../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistForm));
