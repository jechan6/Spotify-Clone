import {connect} from 'react-redux';
import {createPlaylist, fetchPlaylists} from '../../../actions/playlist_actions';
import {fetchPlaylist} from '../../../actions/playlist_actions';
import {setPlaylistId} from '../../../actions/audio_action';
import {fetchSongs} from '../../../actions/song_action';
import {setPhotoUrl} from "../../../actions/audio_action";

import PlaylistIndex from './playlist_index';
const mapStateToProps = state => {

  return {
    playlists: Object.values(state.entities.playlist)
  };
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  setPlaylistId: id => dispatch(setPlaylistId(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  setPhotoUrl: () => dispatch(setPhotoUrl())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
