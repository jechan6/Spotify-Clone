import React from 'react';
class AlbumItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.album.id);
    this.props.fetchSongs();
  }
  render() {

    const {album} = this.props;
    const {songs} = this.props;

    return(
      <div>
        <h1>HELLO</h1>
        <h1>{album.artist}</h1>
        <h1>{album.title}</h1>
        <h1>{album.songIds}</h1>
      </div>
    );
  }
}

export default AlbumItemDetail;
