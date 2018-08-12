import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
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
                <button
                  onClick={() => this.handleClick(song)}
                  className="song-play-button">
                  <i className={
                      !this.state.play ?
                      "fa fa-play" :
                      "fa fa-pause"}>
                  </i>
                </button>
                <SongIndexItem song={song} />
              </div>

          ))}
      </div>
    );
  }
}
export default SongIndex;
