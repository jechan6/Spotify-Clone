import React from 'react';
import SongIndexContainer from '../../song/song_index_container';

class PlaylistDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
    this.toggleOptions = this.toggleOptions.bind(this);
  }
  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchSongs();
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
  render() {
    const{playlist, songs, deletePlaylist} = this.props;
    let songsList;
    let options;
    if(this.state.showOptions){
      options =
        <div onClick={this.toggleOptions} className="modal-container">

        {this.props.otherForm}
        </div>
    }
    if(songs && songs.length >= 1) {
      songsList = <SongIndexContainer
        photoUrl={playlist.photoUrl}
        songs={songs}
        playlistId={playlist.id} addButton={true}/>;
    }
    if(!playlist && !songs) return null;

    return(
      <div className="show-details" onClick={this.hideOptions.bind(this)}>
        <div className="header-content">
          <div className="cover-picture">
            <div className="playlist-cover">
              <div className="image-cover">
                <img src={playlist.photoUrl}></img>
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
