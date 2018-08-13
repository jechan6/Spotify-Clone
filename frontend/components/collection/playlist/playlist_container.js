import {connect} from 'react-redux';
import {createPlaylist, fetchPlaylists} from '../../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
const mapStateToProps = state => {

  return {
    playlists: Object.values(state.entities.playlist)
  };
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
