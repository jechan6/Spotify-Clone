import {connect} from 'react-redux';
import AudioPlayer from './audio-player';
import {setSongPlaying, setCurrentTime} from '../../../actions/audio_action';
import {setTitle, setArtist} from "../../../actions/audio_action";
import {selectSongsFromPayload} from "../../../reducers/selectors";
import {receiveCurrentSong} from "../../../actions/song_action";
const mapStateToProps = (state,ownProps) => {

  let playlist;
  let album;

  if(state.audio.playlistId) {

    playlist = state.entities.playlist[state.audio.playlistId];
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
    songs
  };
};

const mapDispatchToProps = dispatch => ({
  setSongPlaying: song => dispatch(setSongPlaying(song)),
  setCurrentTime: time => dispatch(setCurrentTime(time)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);
