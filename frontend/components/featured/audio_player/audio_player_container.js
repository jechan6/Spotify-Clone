import {connect} from 'react-redux';
import AudioPlayer from './audio-player';
import {setTitle, setArtist} from "../../../actions/audio_action";
const mapStateToProps = state => ({
  audio: state.ui.currentSong,
  volume: state.audio.volume,
  nextSong: state.ui.nextSong,
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  setArtist: artist => dispatch(setArtist(artist))
});
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);
