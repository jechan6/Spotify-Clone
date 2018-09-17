import React from 'react';
import SongIndexContainer from "../song/song_index_container";
import PlaylistContainer from "../collection/playlist/playlist_container";
import AlbumsContainer from "../albums/albums_container";
import {Link} from 'react-router-dom';
class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      result: true,
      playlist: false
    }
  }

  componentWillReceiveProps(newProps){

    if(newProps.album && newProps.album.length > 0) {

      if(this.state.name !== newProps.album[0].title) {

        this.props.fetchAlbum(newProps.album[0].id);
        this.setState({name: newProps.album[0].title});
        this.props.setAlbumId(newProps.album[0].id);
        
      }
    } else if(newProps.artists&& newProps.artists.length > 0) {

        if(this.state.name !== newProps.artists[0].name) {
          // this.props.fetchArtist(newProps.artists[0].id);
          this.setState({name: newProps.artists[0].name});
          this.props.setAlbumId(-1);
          // this.props.setPhotoUrl(newProps.artists[0].photoUrl);
        }
    } else if(!newProps.albums && newProps.playlist.length > 0) {
      if(this.state.name !== newProps.playlist[0].title) {
        this.props.fetchPlaylist(newProps.playlist[0].id);
        this.props.setPlaylistId(newProps.playlist[0].id);
        this.setState({name: newProps.playlist[0].title});
        this.props.setAlbumId(-1);
        
        
      }
    }
  }
  toggleResult(e) {
    if(this.state.result === false) {
      this.setState({result: true});
      this.setState({playlist: false});
    }
  }
  togglePlaylist() {
    if(this.state.playlist === false) {
      this.setState({playlist: true});
      this.setState({result: false});
    }
  }
  render() {
    let result;
    let author;
    let creator;
    let playlistPhoto;
    let photoUrl;
    let link_to_url;
    let {songs} = this.props;
    if(this.props.artists.length > 0) {
      result = this.props.artists[0];
      author = result.name;

    } else
    if(this.props.album.length > 0) {
      result = this.props.album[0];
      creator = result.artist;
      photoUrl = result.photoUrl;
      link_to_url = `album/${result.id}`;
    } else if(this.props.playlist.length >= 1){
      result = this.props.playlist[0];
      creator = result.author;
      playlistPhoto = result.photos[0] ? result.photos[0].photoUrl : result.photoUrl;
      photoUrl = playlistPhoto;
      if(songs.length == 0) {
        songs = -1;
      }
      link_to_url = `playlist/${result.id}`;
    }
   
    if(!result) return null;
    if(songs && songs.length >=5) {
      songs = songs.slice(0,5);
    }

    return <div className="results-container">
        <div className="result-nav">
          <ul className="nav-items">
            <li onClick={this.toggleResult.bind(this)}>TOP RESULTS</li>
            <li onClick={this.togglePlaylist.bind(this)}>PLAYLISTS</li>
          </ul>
        </div>
        {this.state.result ? <div className="results-list-container">
            <div className="result-info">
              <img className="result-photo" src={playlistPhoto ? playlistPhoto : result.photoUrl} />
              <div className="result-title">
                <Link to={link_to_url}>
                  <h1>{result.title ? result.title : author}</h1>
                </Link>
              </div>
              <div className="result-creator">
                {result.artist ? <Link to={`artist/${result.artist_id}`}>
                    <h1>{creator}</h1>
                  </Link> : <h1>{creator}</h1>}
              </div>
            </div>
            <div className="result-songs">
              <SongIndexContainer photoUrl={photoUrl} songs={songs} photoUrl={photoUrl} />
            </div>
          </div> : <div className="searched-playlist">
            {this.props.playlist && this.props.playlist.length > 0 ? (
              <PlaylistContainer playlist={this.props.playlist} />
            ) : (
              <h1 className="playlist-notfound">No results found</h1>
            )}
          </div>}
        {this.state.result ? <div className="search-albums-container">
            <div className="search-album-title">
              <h1 className="search-album-header">Albums</h1>
            </div>
            <div className="search-albums-container">
              {this.props.album.length > 0 ? (
                <AlbumsContainer albums={this.props.album} />
              ) : (
                ""
              )}
            </div>
          </div> : ""}
      </div>;
  }
}

export default SearchResultItem;
