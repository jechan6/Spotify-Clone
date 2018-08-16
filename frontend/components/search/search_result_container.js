import {connect} from 'react-redux';
import {fetchAlbum} from "../../actions/album_actions";
import {fetchPlaylist} from "../../actions/playlist_actions";
import {selectSongsFromPayload} from '../../reducers/selectors';
import {setPlaylistId, setAlbumId} from '../../actions/audio_action';
import SearchResultItem from './search_result_item';
const mapStateToProps = (state, ownProps) => {
  let songs;

  let album;
  let playlist = [];
  if(ownProps.result.length >= 1) {
    ownProps.result.map(el => {
      if(el.artist) {
        album = el;
      } else {
        playlist.push(el);
      }
    });
    if(album) {
      songs = selectSongsFromPayload(state, album);
    } else if(playlist.length > 0) {
      songs = selectSongsFromPayload(state, playlist[0]);
    }

  }
  return {
    album: album,
    playlist: playlist,
    songs,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  setAlbumId: id => dispatch(setAlbumId(id)),
  setPlaylistId: id => dispatch(setPlaylistId)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);
