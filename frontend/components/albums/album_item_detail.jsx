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
            <SongIndexContainer photoUrl={album.photoUrl} songs={songs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItemDetail;
