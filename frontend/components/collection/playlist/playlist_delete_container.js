import {connect} from 'react-redux';
import playlistDelete from './playlist_delete';
import {deletePlaylist} from '../../../actions/playlist_actions';
import { closeModal } from '../../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
import React from 'react';
const mapStateToProps = state => {

  return {playlistId: Object.keys(state.entities.playlist)[0]}
};

const mapDispatchToProps = dispatch => ({
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(playlistDelete));
