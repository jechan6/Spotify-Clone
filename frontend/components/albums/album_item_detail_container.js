import {connect} from 'react-redux';
import {fetchAlbum} from '../../actions/album_actions';
import {fetchSongs} from '../../actions/song_action';
import AlbumItemDetail from './album_item_detail';
import {selectSongsFromAlbum} from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.album.id];
  return {
    album,
    songs: selectSongsFromAlbum(state, album)
  };
};




const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumItemDetail);
