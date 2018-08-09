import {connect} from 'react-redux';
import {fetchSong} from '../../actions/song_action';

const mapStateToProps = state => ({
  song: state.song
});
