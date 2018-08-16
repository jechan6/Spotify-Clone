import React from 'react';
import {Link} from 'react-router-dom';
class AlbumsIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }
  handleSong(album) {

    this.props.receiveCurrentSong(Object.values(album.payload.songs)[0]);
  }
  playMusic() {
    this.props.fetchAlbum(this.props.album.id).then(album => this.handleSong(album));
    this.props.setPhotoUrl(this.props.album.photoUrl);
    this.props.setAlbumId(this.props.album.id);
  }
  render() {
    const {album} = this.props;

    const renderItems = () => (
      <div className="album-item" onClick={() => this.props.onClick(album)} >
        <div className="album-pic-wrapper">
          <a onClick={this.playMusic.bind(this)} className="play-button">
            <i className= "fa fa-play"></i>
          </a>

            <img className="album-photo" src={album.photoUrl}></img>

        </div>
          <Link to={`/album/${album.id}`} className="album-title">{album.title}</Link>
          <Link to={`/artist/${album.artist_id}`} className="album-artist">{album.artist}</Link>
      </div>
    );
    return renderItems();
  }
}
export default AlbumsIndexItem;
