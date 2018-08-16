import React from 'react';
import SongIndexContainer from '../song/song_index_container';
class AlbumItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);

  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
    this.props.fetchSongs();

  }
  handlePlay() {
    return() => {
      this.props.setAlbumId(this.props.albumId);
    }
  }
  render() {

    const {album} = this.props;
    const {songs} = this.props;

    if(!album && !songs) return null;
    return(
      <div className="show-details">
        <div className="header-content">
          <div className="cover-picture">
            <div className="image-wrapper">
              <img src={album.photoUrl}></img>
            </div>
            <h1 className="content-title">{album.title}</h1>
            <h1 className="content-author">{album.artist}</h1>
            <h1 className="content-info">{album.year} • {album.songIds.length} SONGS </h1>
          </div>
          <div className="song-list">
            <SongIndexContainer handlePlay={this.handlePlay} photoUrl={album.photoUrl} albumId={album.id} songs={songs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItemDetail;
