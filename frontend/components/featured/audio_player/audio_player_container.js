import {connect} from 'react-redux';
import AudioPlayer from './audio-player';

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
    songs,
    setTitle: ownProps.setTitle,
    setArtist: ownProps.setArtist
  };
};

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps,null)(AudioPlayer);
