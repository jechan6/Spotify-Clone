import {connect} from 'react-redux';
import React from 'react';
import {fetchArtist} from '../../actions/artist_action';
import {logout} from "../../actions/session_action";
import artistItem from './artist_item';
const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    artist: state.entities.artist[ownProps.artistId]
  }
}
const mapDispatchToProps = dispatch => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(artistItem);
