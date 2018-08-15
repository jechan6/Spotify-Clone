import {connect} from 'react-redux';
import {createPlaylist, fetchPlaylists} from '../../../actions/playlist_actions';
import {fetchPlaylist} from '../../../actions/playlist_actions';
import {setPlaylistId} from '../../../actions/audio_action';
import {fetchSongs, receiveCurrentSong} from '../../../actions/song_action';
import {selectSongsFromPayload} from "../../../reducers/selectors";
import {setPhotoUrl} from "../../../actions/audio_action";

import PlaylistIndex from './playlist_index';
const mapStateToProps = state => {

  return {
    playlists: Object.values(state.entities.playlist),
    songs: state.entities.songs
  };
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  setPlaylistId: id => dispatch(setPlaylistId(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  setPhotoUrl: () => dispatch(setPhotoUrl()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
