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
  // componentDidMount() {
  //   this.props.fetchSongs();
  // }

  handleClick(song) {
    let index = (this.props.songs.indexOf(song)+1) % this.props.songs.length;
    let nextSong = this.props.songs[index];
    this.props.receiveCurrentSong(song);
    this.props.receiveNextSong(nextSong);

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
                    playlistId={this.props.playlistId}
                    deleteSong={this.props.deleteSong}
                    history={this.props.history}
                    song={song} />
                </div>
              </div>
          ))}
      </div>
    );
  }
}
export default SongIndex;
