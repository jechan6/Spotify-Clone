import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    if(this.props.songs[0]) {

      
    }
  }
  handleClick(song) {
    let index = (this.props.songs.indexOf(song)+1) % this.props.songs.length;
    let nextSong = this.props.songs[index];

    this.props.receiveCurrentSong(song);
    this.props.receiveNextSong(nextSong);
    this.props.setAlbumId(this.props.albumId);
    if(this.props.playlistId) {

      this.props.setPlaylistId(this.props.playlistId);
    }
    this.props.setTitle(song.title);
    this.props.setArtist(this.props.songs[0].artist);
    if(this.props.photoUrl) { 

      this.props.setPhotoUrl(this.props.photoUrl);
    } 
  }
  render() {
    const {songs} = this.props;
    if(songs[0] === undefined) return null;

    return(
      <div className="song-content">
          {songs.map( (song) => (
              <div key={song.id} className="song-wrapper">
                <div className="song-list">
                  <SongIndexItem
                    handleClick={this.handleClick}
                    otherForm={this.props.otherForm}
                    addButton={this.props.addButton}
                    deleteSong={this.props.deleteSong}
                    history={this.props.history}
                    hideOptions={this.props.hideOptions}
                    playlistId={this.props.playlistId}
                    song={song} />
                </div>
              </div>
          ))}
      </div>
    );
  }
}
export default SongIndex;
