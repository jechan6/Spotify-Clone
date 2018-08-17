import {connect} from "react-redux";
import {fetchPlaylists} from "../../actions/playlist_actions";
import {fetchAlbum} from "../../actions/album_actions";
import {fetchSongs} from "../../actions/song_action";
import {fetchArtists} from '../../actions/artist_action';
import {logout} from '../../actions/session_action';
import SearchIndex from './search_index';
const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    values: Object.values(state.entities.albums).concat(Object.values(state.entities.playlist)).concat(Object.values(state.entities.artist))
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
