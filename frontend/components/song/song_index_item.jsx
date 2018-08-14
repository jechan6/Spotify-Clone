import React from 'react';
class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showOptions: false,
      children: null
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
  render() {
    const {song, handleClick} = this.props;
    let audio = <audio src={song.trackUrl}/>;
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
      <div >
        {audio}
        <div className="song-info">
          <div className="song-title-button">
            <button
              onClick={() => handleClick(song)}
              className="song-play-button">
              <i className={
                  "fa fa-play"}>
                </i>
              </button>
              <div className="song-title">
                {song.title}
              </div>
          </div>
          <div className="song-options">
            <div onClick={this.toggleOptions} className="ellipsis-option">•••
              {options}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SongIndexItem;
