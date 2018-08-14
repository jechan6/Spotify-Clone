import React from 'react';
import PlaylistIndexItem from '../collection/playlist/playlist_index_item';
class SongPlaylistform extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchPlaylists();

  }
  handleSubmit(playlist) {
    this.props.updatePlaylist(playlist.id, this.props.songId);
  }

  render() {

    return(
      <div className="playlist-form">
        <div className="playlist-content">
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
                <div key={playlist.id} onClick={()=>{this.handleSubmit(playlist);this.props.closeModal();}}>
                  <PlaylistIndexItem
                    playlist={playlist}
                    closeModal={this.props.closeModal}
                    key={playlist.id}
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongPlaylistform;
