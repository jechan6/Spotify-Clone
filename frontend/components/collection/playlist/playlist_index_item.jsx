import React from 'react';
import {Link} from 'react-router-dom';
class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {playlist} = this.props;

      // <Link to={`/playlists/${playlist.id}`} className="album-title">{album.title}</Link>

    return (
      <div className="playlist-item" >
          <img src={playlist.photoUrl}></img>
          <Link className="playlist-title"
            to={`/playlist/${playlist.id}`}>
            {playlist.title}
          </Link>
          <a className="playlist-author">{playlist.author}</a>
          
      </div>
    );
  }
}
export default PlaylistIndexItem;
