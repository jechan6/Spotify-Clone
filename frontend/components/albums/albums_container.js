import {connect} from 'react-redux';
import {fetchAlbum, fetchAlbums} from '../../actions/album_actions';
import AlbumsIndex from './albums_index';
const mapStateToProps = (state,ownProps) => {

  return {
    albums: Object.values(state.entities.albums)
  };
};
const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);
