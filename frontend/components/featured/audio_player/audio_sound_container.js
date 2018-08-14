import {connect} from "react-redux";
import {setVolume} from "../../../actions/audio_action";
import AudioSound from './audio_sound';
const mapStateToProps = state => ({
  volume: state.audio.volume
});

const mapDispatchToProps = dispatch => {

  return{
    setVolume: (volume) => dispatch(setVolume(volume))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioSound);
