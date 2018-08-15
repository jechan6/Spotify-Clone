import {connect} from 'react-redux';
import AudioInfo from './audio_info';
const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  artist: ownProps.artist,
  photoUrl: state.audio.photoUrl
});

export default connect(mapStateToProps, null)(AudioInfo);
