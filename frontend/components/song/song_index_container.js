import {connect} from 'react-redux';
import {fetchSongs} from '../../actions/song_action';
import SongIndex from './song_index';
import {receiveCurrentSong, receiveNextSong} from "../../actions/song_action";
const mapStateToProps = ({entities}, ownProps) => {
  let songs =Object.values(entities.songs);
  if(ownProps.songs.length > 0) {
    songs = ownProps.songs
  }
  return {songs: songs};
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  receiveNextSong: (song) => dispatch(receiveNextSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
