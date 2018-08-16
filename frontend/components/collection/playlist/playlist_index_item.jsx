import React from 'react';
import {Link} from 'react-router-dom';
class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.closeModal) {
      this.props.closeModal();
    }
  }
  handleSong(playlist) {
    if(!playlist.payload.songs) return;
    this.props.receiveCurrentSong(Object.values(playlist.payload.songs)[0]);
  }
  playMusic(){
    this.props.fetchPlaylist(this.props.playlist.id).then(playlist => this.handleSong(playlist));
    this.props.setPhotoUrl(this.props.playlist.photoUrl);
    this.props.setPlaylistId(this.props.playlist.id);

    // this.props.receiveCurrentSong();
  }

  render() {
    const {playlist} = this.props;
    let photos;

    if(playlist.photos.length > 3) {
      // photos = playlist.photos;
      // <div className="playlist-image-wrapper">
      //   <div className="first-row">
      //     // <div className="playlist-image"
      //     //   style="background-image: url(" + photos[0] + ");\""">
      //     // </div>
      //   </div>
      //   <div className="second-row">
      //   </div>
      // </div>
    }
    return (
      <div className="playlist-item" >
            <div onClick={this.handleClick} className="playlist-pic-wrapper">
              <a onClick={this.playMusic.bind(this)} className="play-button">
                <i className= "fa fa-play"></i>
              </a>
              <img onClick={this.handleClick} src={playlist.photoUrl}></img>
            </div>

          <div className="playlist-name">
            <Link className="playlist-title"
              to={`/playlist/${playlist.id}`}>
              {playlist.title}
            </Link>
          <a className="playlist-author">{playlist.author}</a>
          </div>
      </div>
    );
  }
}
export default PlaylistIndexItem;
