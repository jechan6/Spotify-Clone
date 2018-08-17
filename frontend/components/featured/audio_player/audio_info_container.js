import {connect} from 'react-redux';
import AudioInfo from './audio_info';
import {selectAlbumIdFromName} from "../../../reducers/selectors";
const mapStateToProps = (state, ownProps) => {
  let artist_id;
  if(Object.values(state.entities.albums)[0]) {
    artist_id = Object.values(state.entities.albums)[0].artist_id;

  }

  return {
    title: state.audio.title,
    artist: state.audio.artist,
    artist_id,
    photoUrl: state.audio.photoUrl
  }
};

export default connect(mapStateToProps, null)(AudioInfo);
