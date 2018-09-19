import React from 'react';
import AlbumsIndexItem from './albums_index_item';
import { withRouter } from 'react-router-dom';
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
    this.props.fetchSongs();
  }

  handleClick(album) {

    return(e) => {
      if (!e.target.classList.contains("fa-play") && !e.target.classList.contains("play-button")) {
        this.props.history.push(`/album/${album.id}`);
      }
    }

  }

  render() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const date = new Date();
    const day = days[date.getDay() + 1 % days.length];
    if(this.props.albums.length == 0) {
      return <div class="fa-7x">
          <i class="fas fa-circle-notch fa-spin" />
        </div>;
    }
    const renderDetail = () => (
      <div>
        <AlbumItemDetailContainer album={this.state.album}/>
      </div>
    );
    const renderItems = () => (
      <div>
        <div className="newrelease-header"><h1>Get set for {day}</h1></div>
        <div className="albums-index-container">
          <div className="row">
    
          {this.props.albums.map((album) => (
            <AlbumsIndexItem
              album={album}
              key={album.id}
              setAlbumId={this.props.setAlbumId}
              fetchAlbum={this.props.fetchAlbum}
              receiveCurrentSong={this.props.receiveCurrentSong}
              onClick={this.handleClick}
              setPhotoUrl={this.props.setPhotoUrl}
              setTitle={this.props.setTitle}
              setArtist={this.props.setArtist}
              />
          ))}
          </div>
        </div>
      </div>
    )
    return renderItems();

  }
}
export default withRouter(AlbumsIndex);
