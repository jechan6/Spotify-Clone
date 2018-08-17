import {connect} from 'react-redux';
import {fetchAlbum} from "../../actions/album_actions";
import {fetchPlaylist} from "../../actions/playlist_actions";
import {selectSongsFromPayload} from '../../reducers/selectors';
import {setPlaylistId, setAlbumId} from '../../actions/audio_action';
import {fetchArtist} from "../../actions/artist_action";
import SearchResultItem from './search_result_item';
const mapStateToProps = (state, ownProps) => {
  let songs = [];

  let album = [];
  let playlist = [];
  let artists = [];
  if(ownProps.inputVal.length != 1 && ownProps.result.length >= 1) {

    ownProps.result.map(el => {
      if(el.artist) {
        album.push(el);
      } else {
        if(el.name) {
          artists.push(el);
        } else {
          playlist.push(el);
        }
      }
    });
    if(album.length > 0) {
      songs = selectSongsFromPayload(state, album[0]);
    } else if(artists.length > 0) {
      songs = selectSongsFromPayload(state, artists[0]);
    } else if(playlist.length > 0) {
      songs = selectSongsFromPayload(state, playlist[0]);
    }

  }
  return {
    album: album,
    playlist: playlist,
    artists,
    songs
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  setAlbumId: id => dispatch(setAlbumId(id)),
  setPlaylistId: id => dispatch(setPlaylistId),
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);
