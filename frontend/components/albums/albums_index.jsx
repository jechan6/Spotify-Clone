import React from 'react';
import AlbumsIndexItem from './albums_index_item';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbums();
  }
  render() {

    return(
      <div>
        
        <div className="albums-index-container">
          {this.props.albums.map((album) => (
            <AlbumsIndexItem
              album={album}
              key={album.id}
              fetchAlbum={this.props.fetchAlbum}
              />
          ))}
        </div>
      </div>
    );
  }
}
export default AlbumsIndex;
