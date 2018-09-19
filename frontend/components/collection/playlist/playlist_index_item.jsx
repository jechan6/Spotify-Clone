import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if(this.props.closeModal) {
      this.props.closeModal();
    }
    if (!e.target.classList.contains("fa-play") && !e.target.classList.contains("play-button")) {
      this.props.history.push(`/playlist/${this.props.playlist.id}`);
    }
  }
  handleSong(playlist) {
    if(!playlist.payload.songs) return;
    let song = Object.values(playlist.payload.songs)[0];
    this.props.receiveCurrentSong(song);
    this.props.setTitle(song.title);
    this.props.setArtist(song.artist);
  }
  
  playMusic(){
    this.props.fetchPlaylist(this.props.playlist.id).then(playlist => this.handleSong(playlist));
    if(this.props.playlist && this.props.playlist.photos.length >= 1) {
      this.props.setPhotoUrl(this.props.playlist.photos[0].photoUrl);
    } else {
      this.props.setPhotoUrl(this.props.playlist.photoUrl);
    }
    this.props.setPlaylistId(this.props.playlist.id);
  }

  render() {
    const {playlist} = this.props;
    let src;
    let photo;
    if(playlist.photos.length >= 1) {

      photo = playlist.photos[0];
      src=photo.photoUrl;
    } else {
      src=playlist.photoUrl;
    }
    return (
      <div className="col-2 col-6-medium col-12-small col-12-xsmall">
        <div className="playlist-item" >
              <div onClick={this.handleClick} className="playlist-pic-wrapper">
                <a onClick={this.playMusic.bind(this)} className="play-button">
                  <i className= "fa fa-play"></i>
                </a>
              <img onClick={this.handleClick} src={src}></img>
              </div>

            <div className="playlist-name">
              <Link className="playlist-title"
                to={`/playlist/${playlist.id}`}>
                {playlist.title}
              </Link>
            <a className="playlist-author">{playlist.author}</a>
            </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PlaylistIndexItem);
