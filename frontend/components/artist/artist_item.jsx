import React from 'react';
import SongIndexContainer from '../song/song_index_container';
import NavSidebar from "../featured/nav_sidebar";
import AlbumsContainer from "../albums/albums_container";
class artistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: this.props.artist,
      songs: []
    }
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId).then(
      action => this.setState({artist: Object.values(action.payload.artist)[0],
        songs: Object.values(action.payload.songs)})
    );

  }

  render() {
    if(this.state.artist === undefined) return null;
    const{artist, songs} = this.state;
    let popSongs = songs.slice(0,5);
    return(
      <div className="artist-container">
        <NavSidebar logout={this.props.logout} currentUser={this.props.currentUser}/>
        <div className="artist-show-container">
          <div className="artist-top-header">
            <img className="artist-photo" src={artist.photoUrl}></img>
            <div className="artist-header">
              <h1>{artist.name}</h1>
            </div>
            <div className="artist-nav">
              <ul className="artist-nav-ul">
                <li className="artist-nav-items">OVERVIEW</li>
              </ul>
            </div>
          </div>
          <h1 className="artist-song-header">Popular</h1>
          <div className="artist-songs-container">
            <SongIndexContainer songs={popSongs} photoUrl={artist.photoUrl} />
          </div>
        </div>
        <div className="artist-albums-container">
          <h1 className="artist-album-header">Albums</h1>
          <div className="artist-albums">
            <AlbumsContainer artistId={artist.id} />
          </div>
        </div>
      </div>
    )
  }
}
export default artistItem;
