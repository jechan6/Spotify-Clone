import {connect} from 'react-redux';
import AudioInfo from './audio_info';
import {fetchArtists} from "../../../actions/artist_action";
import {selectArtistFromName} from "../../../reducers/selectors";
const mapStateToProps = (state, ownProps) => {
  let artist_id;
  if(state.audio.artist) { 
    artist_id = selectArtistFromName(state, state.audio.artist).id;
  }


  return {
    title: state.audio.title,
    artist: state.audio.artist,
    artist_id,
    photoUrl: state.audio.photoUrl
  }
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});
export default connect(mapStateToProps, mapDispatchToProps)(AudioInfo);
