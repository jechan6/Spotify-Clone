import {connect} from 'react-redux';
import AudioPlayer from './audio-player';
import {setSongPlaying, setCurrentTime} from '../../../actions/audio_action';
import {setTitle, setArtist} from "../../../actions/audio_action";
import {selectSongsFromPayload, selectArtistFromName} from "../../../reducers/selectors";
import {receiveCurrentSong} from "../../../actions/song_action";
const mapStateToProps = (state,ownProps) => {

  let playlist;
  let album;
  let artist;
  if(state.audio.playlistId && state.audio.playlistId !== -1) {
    playlist = state.entities.playlist[state.audio.playlistId];
  } else if(state.audio.albumId && state.audio.albumId !== -1) {
    album = state.entities.albums[state.audio.albumId];
  } else if(state.audio.artist) {
 
    artist = state.audio.artist;
  }
  let songs = null;
  if(playlist) {
    songs = selectSongsFromPayload(state, playlist);
  } else if(album) {
    songs = selectSongsFromPayload(state, album);
  } else if(artist) {
    artist = selectArtistFromName(state, artist);
    songs = selectSongsFromPayload(state, artist);
    
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
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  setTitle: title => dispatch(setTitle(title)),
  setArtist: artist => dispatch(setArtist(artist))
});
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);
