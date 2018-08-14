import React from 'react';
import {Link} from 'react-router-dom';
class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){

    this.props.closeModal();
  }
  render() {
    const {playlist} = this.props;

    return (
      <div onClick={this.props.addSong} className="playlist-item" >
          <div onClick={this.handleClick} className="playlist-pic-wrapper">
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
