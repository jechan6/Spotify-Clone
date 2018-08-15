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
  componentWillReceiveProps(newProps) {

  }
  render() {

    return(
      <div className="playlist-container">
        <div className="playlist-index-container">
          {this.props.playlists.map((playlist) => (
            <PlaylistIndexItem
              playlist={playlist}
              key={playlist.id}
              fetchPlaylist={this.props.fetchPlaylist}
              setPlaylistId={this.props.setPlaylistId}
              setPhotoUrl={this.props.setPhotoUrl}
              />
          ))}
        </div>
      </div>
    )
  }
}

export default PlaylistIndex;
