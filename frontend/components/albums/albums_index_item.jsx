import React from 'react';

class AlbumsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.album.id);
  }

  render() {
    const {album} = this.props;
    return(
      <div className="album-item">
        <img src={album.photoUrl}></img>
        <a className="album-title">{album.title}</a>
        <a className="album-artist">{album.artist}</a>
      </div>
    );
  }
}
export default AlbumsIndexItem;
