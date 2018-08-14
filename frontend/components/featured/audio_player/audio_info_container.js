import {connect} from 'react-redux';
import AudioInfo from './audio_info';
const mapStateToProps = state => ({
  title: state.audio.title,
  artist: state.audio.artist,
  photoUrl: state.audio.photoUrl
});

export default connect(mapStateToProps, null)(AudioInfo);
