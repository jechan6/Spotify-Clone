import React from 'react';
import SongIndexContainer from "../song/song_index_container";
import PlaylistContainer from "../collection/playlist/playlist_container";
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

    if(newProps.album) {
      if(this.state.name !== newProps.album.title) {
        this.props.fetchAlbum(newProps.album.id);
        this.setState({name: newProps.album.title});
        this.props.setAlbumId(newProps.album.id);
      }
    } else if(!newProps.album && newProps.playlist.length >= 1) {
      if(this.state.name !== newProps.playlist[0].title) {
        this.props.fetchPlaylist(newProps.playlist[0].id);
        this.setState({name: newProps.playlist[0].title});
        this.props.setAlbumId(newProps.playlist[0].id);
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
    if(this.props.album) {
      result = this.props.album;
    } else if(this.props.playlist.length>=1){
      result = this.props.playlist[0];
    }
    let {songs} = this.props;
    if(!result) return null;
    if(songs.length >=5) {
      songs = songs.slice(0,5);
    }

    return(
      <div className="results-container">
        <div className="result-nav">
          <ul className="nav-items">
            <li onClick={this.toggleResult.bind(this)}>TOP RESULTS</li>
            <li onClick={this.togglePlaylist.bind(this)}>PLAYLISTS</li>
          </ul>
        </div>
        {this.state.result ?
          <div className="results-list-container">
            <div className="result-info">
              <img className="result-photo" src={result.photoUrl}></img>
              <div className="result-title">
                <h1>{result.title}</h1>
              </div>
              <div className="result-creator">
                <h1>{result.artist ? result.artist : result.author}</h1>
              </div>
            </div>
            <div className="result-songs">
              <SongIndexContainer songs={songs} photoUrl={result.photoUrl}/>
            </div>
          </div>
        :
        <div className="searched-playlist">
          <PlaylistContainer playlist={this.props.playlist}/>
        </div>}
      </div>
    );
  }
}

export default SearchResultItem;
