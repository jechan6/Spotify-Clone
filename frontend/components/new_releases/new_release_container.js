import {connect} from "react-redux";
import NewReleases from './new_release';

import {fetchAlbums} from '../../actions/album_actions';
const mapStateToProps = ({entities}, ownProps) => ({
  albums: entities.albums
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});
export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);
