import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistFormContainer from './playlist_form_container';
class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();

  }

  render() {
    if (this.props.playlists.length == 0) {
      return <div class="fa-7x">
        <i class="fas fa-circle-notch fa-spin" />
      </div>;
    }
    return <div className="playlist-container">
        <div className="playlist-index-container">
          <div className="row">
            {this.props.playlists.map(playlist => (
              <PlaylistIndexItem
                playlist={playlist}
                key={playlist.id}
                fetchPlaylist={this.props.fetchPlaylist}
                setPlaylistId={this.props.setPlaylistId}
                setPhotoUrl={this.props.setPhotoUrl}
                receiveCurrentSong={this.props.receiveCurrentSong}
                setTitle={this.props.setTitle}
                setArtist={this.props.setArtist}
              />
            ))}
          </div>
        </div>
      </div>;
  }
}

export default PlaylistIndex;
