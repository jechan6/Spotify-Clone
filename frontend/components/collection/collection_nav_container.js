import {connect} from "react-redux";
import {openModal} from "../../actions/modal_actions";
import CollectionNav from './collection_nav';
import React from 'react';
const mapDispatchToProps = dispatch =>{
  return {
    openModal: () => dispatch(openModal("playlist_form"))
  };
};
export default connect(null, mapDispatchToProps)(CollectionNav);
