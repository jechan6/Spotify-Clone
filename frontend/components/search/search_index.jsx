import React from 'react';
import AudioPlayerContainer from '../featured/audio_player/audio_player_container';
import AudioInfoContainer from '../featured/audio_player/audio_info_container';
import AudioSoundContainer from '../featured/audio_player/audio_sound_container';
import NavSidebar from '../featured/nav_sidebar';
import SearchResultContainer from './search_result_container';
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;
class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      inputVal: "",
      results: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
  }


  handleTitle(title) {
    this.setState({title});
  }
  handleArtist(artist) {
    this.setState({artist});
  }
  componentDidMount() {

      this.props.fetchSongs();
      this.props.fetchAlbums();
      this.props.fetchPlaylists();
      this.props.fetchArtists();

  }
  matches(value) {
    const matches = [];
    if (this.state.inputVal.length === 0) {
       return matches;
    }

    let result = "No results found for " + this.state.inputVal;
    this.props.values.forEach(value => {
      let sub;
      if(value.title && this.state.inputVal.length >= 2) {
        sub = value.title.slice(0, this.state.inputVal.length);
      } else if(value.name && this.state.inputVal.length >= 2) {
        sub = value.name.slice(0, this.state.inputVal.length);
      }

      if (this.state.inputVal.length >= 2 && sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(value);
      }
    });
    if (matches.length === 0) {
      matches.push('No results found for ' + `\"${value}\"`);
    }
    return matches;
  }

  handleInput(e){
    e.preventDefault();
    let results = this.matches(e.target.value);
    this.setState({inputVal: e.target.value, results});


  }

  render() {
    const {logout, currentUser} = this.props;
    let result;
    let notFound;


    if(typeof this.state.results[0] === "string") {
      notFound = <div className="search-error"><h1 className="error-text">{this.state.results}</h1></div>;
    } else {
      result = this.state.results;

      notFound = "";
    }
    return(
      <div className="search-main-container">
        <NavSidebar logout={logout} currentUser={currentUser}/>
        <div className="search-wrapper">

          <section className="search-container">
            <div className="search-bar">
              <label className="search-bar-label">
                Search for a Artist, Album, Playlist</label>
              <input className="search-input"
                onChange={this.handleInput}
                placeholder="Start typing..." type="text">
              </input>
            </div>
          </section>

          <section className="search-results">
            {notFound ? notFound :
              <SearchResultContainer
                inputVal={this.state.inputVal}
                result={result}
              />}
          </section>
          </div>

      </div>
    );
  }
}

export default SearchIndex;

// <div className="audio-controls-container">
//   <AudioInfoContainer/>
//   <AudioPlayerContainer/>
//   <AudioSoundContainer/>
// </div>
//
