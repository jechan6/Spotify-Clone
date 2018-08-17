import React from 'react';
import SongIndexContainer from '../../song/song_index_container';

class PlaylistDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchSongs();
  }
  handlePlay() {

    return() => {
      that.props.setPlaylistId(this.props.playlistId);
    }
  }
  toggleOptions(e) {
    this.setState({showOptions: !this.state.showOptions});
  }
  hideOptions(e) {
    if(e.target.className !== "ellipsis-option") {
      this.setState({hideSongOptions: true});
    } else {
      this.setState({hideSongOptions: false});
    }
    if(e.target.className !== "playlist-options") {
      this.setState({showOptions: false});
    }
  }
  handleRemove(e) {
    e.preventDefault();
    const follower = {playlist_id: this.props.playlist.id, user_id: this.props.currentUser.id};
    this.props.removeFromLibrary(follower);
  }
  handleSave(e) {
    e.preventDefault();
    this.props.updatePlaylist(this.props.playlist.id,"nil",this.props.currentUser.id)
  }
  render() {
    const{playlist, songs, deletePlaylist} = this.props;
    let songsList;
    let options;
    if(this.state.showOptions){
      if(playlist.author_id === this.props.currentUser.id) {
        options = <div onClick={this.toggleOptions} className="modal-container">
          {this.props.otherForm}
        </div>;

      } else if(playlist.followers && Object.values(playlist.followers).includes(this.props.currentUser.id)) {
        options = <div onClick={this.toggleOptions} className="modal-container">
          <button
          onClick={this.handleRemove.bind(this)}
        className="menu-item">
          Remove From Your Library
        </button>
      </div>;
      } else {
        options = <div onClick={this.toggleOptions} className="modal-container">
          <button
            onClick={this.handleSave.bind(this)}
          className="menu-item">
            Save to Your Library
          </button>

        </div>;
      }
    }
    if(songs && songs.length >= 1) {
      songsList = <SongIndexContainer
        photoUrl={playlist.photos.length > 0 ? playlist.photos[0].photoUrl : playlist.photoUrl}
        songs={songs}
        handlePlay={this.handlePlay}
        addButton={true}/>;
    }
    if(!playlist && !songs) return null;
    let src;
    if(playlist.photos.length >= 1) {
      src = playlist.photos[0].photoUrl;

    } else {
      src=playlist.photoUrl;
    }
    return(
      <div className="show-details" onClick={this.hideOptions.bind(this)}>
        <div className="header-content">
          <div className="cover-picture">
            <div className="playlist-cover">
              <div className="image-cover">
                <img src={src}></img>
              </div>
            </div>
            <div className="content-info">
              <h1 className="content-title">{playlist.title}</h1>
              <h1 className="content-author">{playlist.author}</h1>
              <h1 className="content-info">{playlist.songIds.length} SONGS </h1>
            </div>
            <div className="options">
              <div onClick={this.toggleOptions} className="playlist-options">•••
                {options}</div>
            </div>
          </div>
          <div className="song-list">
            {songsList}
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
