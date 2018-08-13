import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PlaylistFormContainer from '../collection/playlist/playlist_form_container';
import PlaylistDeleteContainer from '../collection/playlist/playlist_delete_container';
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'playlist_form':
      component = <PlaylistFormContainer />;
      break;
    case 'playlist_delete':
      component = <PlaylistDeleteContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child">
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
