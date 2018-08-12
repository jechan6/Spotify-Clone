import React from 'react';
import {Link} from 'react-router-dom';
class AlbumsIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const {album} = this.props;

    const renderItems = () => (
      <div className="album-item" onClick={() => this.props.onClick(album)} >
          <img src={album.photoUrl}></img>
          <Link to={`/album/${album.id}`} className="album-title">{album.title}</Link>
          <a className="album-artist">{album.artist}</a>
      </div>
    );
    return renderItems();
  }
}
export default AlbumsIndexItem;
