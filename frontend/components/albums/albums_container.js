import {connect} from 'react-redux';
import {fetchAlbum, fetchAlbums} from '../../actions/album_actions';
import {setAlbumId, setPhotoUrl, setTitle,setArtist} from '../../actions/audio_action';
import {fetchSongs, receiveCurrentSong} from '../../actions/song_action';
import {selectAlbumsFromArtist} from '../../reducers/selectors';
import AlbumsIndex from './albums_index';
const mapStateToProps = (state,ownProps) => {
  let albums = Object.values(state.entities.albums);
  if(ownProps.artistId) {
    albums = selectAlbumsFromArtist(state, ownProps.artistId);
  }
  return {
    albums
  };
};
const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  setAlbumId: id => dispatch(setAlbumId(id)),
  setPhotoUrl: url => dispatch(setPhotoUrl(url)),
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  setTitle: title => dispatch(setTitle(title)),
  setArtist: artist => dispatch(setArtist(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);
