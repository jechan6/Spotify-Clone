import {connect} from "react-redux";
import {openModal} from "../../actions/modal_actions";
import CollectionNav from './collection_nav';
import React from 'react';
const mapDispatchToProps = dispatch =>{
  return {
    otherForm: (
      <button
      className="modal-button"
      onClick={() => dispatch(openModal('playlist_form'))}>
        NEW PLAYLIST
      </button>
    )
  };
};
export default connect(null, mapDispatchToProps)(CollectionNav);
