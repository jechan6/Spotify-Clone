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

    this.setState({showOptions: !this.state.showOptions})
  }
  render() {
    const{playlist, songs, deletePlaylist} = this.props;
    let songsList;
    let options;
    if(this.state.showOptions){
      options = <div onClick={this.toggleOptions}
        className="modal-container">{this.props.otherForm}</div>
    }

    if(songs && songs.length >= 1) {
      songsList = <SongIndexContainer songs={songs}/>
    }
    if(!playlist && !songs) return null;
    return(
      <div className="show-details">
        <div className="header-content">
          <div className="cover-picture">
            <img src={playlist.photoUrl}></img>
            <h1 className="content-title">{playlist.title}</h1>
            <h1 className="content-author">{playlist.author}</h1>
            <h1 className="content-info">{playlist.songIds.length} SONGS </h1>
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
