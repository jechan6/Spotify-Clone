import React from 'react';
import AlbumsIndexItem from './albums_index_item';
import { Route } from 'react-router-dom';
import AlbumItemDetailContainer from './album_item_detail_container';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      album: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbums();

  }

  handleClick(album) {
    this.setState({detail: !this.state.detail, album})
  }
  render() {
    // (this.state.detail || this.props.albumShow) ? renderDetail() :
    if(!this.props.albums) {
      return null;
    }
    const renderDetail = () => (
      <div>
        <AlbumItemDetailContainer album={this.state.album}/>
      </div>
    );
    const renderItems = () => (
      <div>
        <div className="newrelease-header"><h1>New albums</h1></div>
        <div className="albums-index-container">
          {this.props.albums.map((album) => (
            <AlbumsIndexItem
              album={album}
              key={album.id}
              onClick={this.handleClick}
              />
          ))}
        </div>
      </div>
    )
    return renderItems();

  }
}
export default AlbumsIndex;
