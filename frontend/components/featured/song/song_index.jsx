import React from 'react';
import SongIndexItem from './song_index_item';
class SongIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }
  render() {
    const {songs} = this.props;
    return(
      <div>
          {songs.map( (song) => (
            <SongIndexItem key={song.id} song={song} />
          ))}
      </div>
    );
  }
}
export default SongIndex;
