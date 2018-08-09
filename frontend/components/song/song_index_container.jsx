import {connect} from 'react-redux';
import {fetchSongs} from '../../actions/song_action';
import SongIndex from './song_index';
const mapStateToProps = ({entities}) => ({
  song: Object.values(entities.song)
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
