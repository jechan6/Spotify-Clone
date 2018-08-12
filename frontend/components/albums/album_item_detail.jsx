import React from 'react';
import SongIndexContainer from '../song/song_index_container';
class AlbumItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
    this.props.fetchSongs();
  }
  render() {

    const {album} = this.props;
    const {songs} = this.props;
    if(!album && !songs) return null;
    return(
      <div className="album-details">
        <div className="album-content">
          <div className="album-cover">
            <img src={album.photoUrl}></img>
            <h1 className="album-title">{album.title}</h1>
            <h1 className="album-artist">{album.artist}</h1>
            <h1 className="album-info">{album.year} • {album.songIds.length} SONGS </h1>
          </div>
          <div className="song-list">
            <SongIndexContainer songs={songs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItemDetail;
