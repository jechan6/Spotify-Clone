import React from 'react';
import {Link} from 'react-router-dom';
class AlbumsIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }
  handleSong(album) {
    let song = Object.values(album.payload.songs)[0];
    this.props.receiveCurrentSong(song);
    this.props.setTitle(song.title);
    this.props.setArtist(song.artist);
  }
  playMusic() {
    this.props.fetchAlbum(this.props.album.id).then(album => this.handleSong(album));
    this.props.setPhotoUrl(this.props.album.photoUrl);
    this.props.setAlbumId(this.props.album.id);
  }
  render() {
    const {album} = this.props;
    
    const renderItems = () => (
      <div className="col-2 col-3-medium col-6-small">
        <div className="album-item" >
          <div className="album-pic-wrapper" onClick={this.props.onClick(album)} >
            <a onClick={this.playMusic.bind(this)} className="play-button">
              <i className= "fa fa-play"></i>
            </a>
              <img className="album-photo" src={album.photoUrl}></img>
          </div>
            <Link to={`/album/${album.id}`} className="album-title">{album.title}</Link>
            <Link to={`/artist/${album.artist_id}`} className="album-artist">{album.artist}</Link>
        </div>
      </div>
    );
    return renderItems();
  }
}
export default AlbumsIndexItem;
