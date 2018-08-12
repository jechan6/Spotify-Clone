import {connect} from 'react-redux';
import AudioPlayer from './audio-player';

const mapStateToProps = state => ({
  audio: state.ui.currentSong,
  nextSong: state.ui.nextSong,
  songs: Object.values(state.entities.songs)
});

export default connect(mapStateToProps,null)(AudioPlayer);