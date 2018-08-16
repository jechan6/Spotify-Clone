import React from 'react';
class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showOptions: false,
      children: null,
      isHovering: false
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleDeleteSong = this.handleDeleteSong.bind(this);
  }
  toggleOptions() {

    this.setState({showOptions: !this.state.showOptions});

  }

  handleDeleteSong(e) {
    e.preventDefault();
    const playlistSong =
      {playlist_id: this.props.playlistId, song_id: this.props.song.id};
    this.props.deleteSong(playlistSong);
  }

  componentWillReceiveProps(newProps) {

  }
  closeOptions() {
    this.toggleOptions();
  }
  handleMouseHover(type) {
    return(e) => {
      this.setState({[type]: true});
    }
 }
  handleMouseLeave(type) {
    return(e) => {
      this.setState({[type]: false});
    }
  }
  render() {
    const {song, handleClick} = this.props;

    let options;
    let removeFromPlaylist;

    if(this.props.addButton) {
      removeFromPlaylist = <button
        onClick={this.handleDeleteSong}
        className="menu-item">Remove From Playlist</button>
    }

    if(this.state.showOptions) {
      options =
      <div className="modal">
        <div onClick={this.toggleOptions}
          className="modal-container" value={song.id}>
          {this.props.otherForm}
          {removeFromPlaylist}
        </div>
        <div onClick={this.closeOptions.bind(this)} id="close-modal">
        </div>
      </div>;
    }

    return(
      <div className="song-wrapper">

        <div className="song-info"   onMouseEnter={this.handleMouseHover("isHovering").bind(this)}
          onMouseLeave={this.handleMouseLeave("isHovering").bind(this)} >

            <div className="song-title-button">
              { this.state.isHovering &&
                <button
                onClick={() => handleClick(song)}
                className="song-play-button">
                  <i className={
                    "fa fa-play"}></i>
                </button> }
                {!this.state.isHovering &&  <i className="fas fa-music"></i>}
                <div className="song-title">
                  {song.title}
                </div>
            </div>
            <div className="song-options">
              {this.state.isHovering? <div onClick={this.toggleOptions} className="ellipsis-option">•••
                {options}
              </div> : ""}
            </div>

        </div>

      </div>
    );
  }
}

export default SongIndexItem;
