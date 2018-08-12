import React from 'react';

class AlbumsIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const {album} = this.props;

    const renderItems = () => (
      <div className="album-item" onClick={() => this.props.onClick(album)} >
          <img src={album.photoUrl}></img>
          <a className="album-title">{album.title}</a>
          <a className="album-artist">{album.artist}</a>
      </div>
    );
    return renderItems();
  }
}
export default AlbumsIndexItem;
