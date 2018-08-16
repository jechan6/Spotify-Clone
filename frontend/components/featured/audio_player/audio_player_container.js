import {connect} from 'react-redux';
import AudioPlayer from './audio-player';
import {setSongPlaying, setCurrentTime} from '../../../actions/audio_action';
import {selectSongsFromPayload} from "../../../reducers/selectors";
const mapStateToProps = (state,ownProps) => {

  let playlist;
  let album;
  if(ownProps.playlisId) {
    playlist = state.entities.playlist[ownProps.playlistId];
  } else if(state.audio.albumId) {
    album = state.entities.albums[state.audio.albumId];
  }
  let songs = null;
  if(playlist) {
    songs = selectSongsFromPayload(state, playlist);
  } else if(album) {
    songs = selectSongsFromPayload(state, album);

  }
  return {
    audio: state.ui.currentSong,
    volume: state.audio.volume,
    nextSong: state.ui.nextSong,
    songInPlay: state.audio.songInPlay,
    songTime: state.audio.songTime,
    songs,
    setTitle: ownProps.setTitle,
    setArtist: ownProps.setArtist
  };
};

const mapDispatchToProps = dispatch => ({
  setSongPlaying: song => dispatch(setSongPlaying(song)),
  setCurrentTime: time => dispatch(setCurrentTime(time))
});
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);
