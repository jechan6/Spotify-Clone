import React from 'react';
import PlaylistIndexItem from '../collection/playlist/playlist_index_item';
class SongPlaylistform extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();

  }
  render() {

    return(
      <div className="playlist-form">

        <div className="playlist-form-close" onClick={e => e.stopPropagation()}>
          <button className="form-close"
            onClick={this.props.closeModal}>X</button>
          <h1>HELLO</h1>
        </div>
        <div className="song-playlist-header">
          <h1 className="playlist-header">Add to playlist</h1>
        </div>
        <div className="song-playlist-container">
          <div className="playlist-index-container">
            {this.props.playlists.map((playlist) => (
              <PlaylistIndexItem
                playlist={playlist}
                key={playlist.id}
                />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SongPlaylistform;
