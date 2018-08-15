import {connect} from 'react-redux';
import AudioPlayer from './audio-player';
import {setTitle, setArtist} from "../../../actions/audio_action";
import {selectSongsFromPayload} from "../../../reducers/selectors";
const mapStateToProps = (state,ownProps) => {
  const playlist = state.entities.playlist[ownProps.playlistId];

  let songs = null;
  if(playlist) {
    songs = selectSongsFromPayload(state, playlist);
  }

  return {
    audio: state.ui.currentSong,
    volume: state.audio.volume,
    nextSong: state.ui.nextSong,
    songs
  };
};

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  setArtist: artist => dispatch(setArtist(artist))
});
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);
