import {connect} from 'react-redux';
import {fetchAlbum} from '../../actions/album_actions';
import {fetchSongs} from '../../actions/song_action';
import AlbumItemDetail from './album_item_detail';
import {setAlbumId} from '../../actions/audio_action';
import {selectSongsFromPayload} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.albumId];
  let songs = null;
  if(album) {
    songs = selectSongsFromPayload(state, album)
  }
  return {
    album,
    songs
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  setAlbumId: id => dispatch(setAlbumId)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumItemDetail);
