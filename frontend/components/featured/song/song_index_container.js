import {connect} from 'react-redux';
import {fetchSongs} from '../../../actions/song_action';
import SongIndex from './song_index';

const mapStateToProps = ({entities}) => ({
  songs: Object.values(entities.songs)
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});


export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
