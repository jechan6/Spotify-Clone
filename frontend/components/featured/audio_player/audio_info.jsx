import React from "react";
import {Link} from 'react-router-dom';
class AudioInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      photoUrl: ""
    }
  }
  componentWillReceiveProps(newProps) {

    if(newProps.photoUrl) {
      this.setState({photoUrl: newProps.photoUrl})
    }
    if(newProps.title) {
      this.setState({title: newProps.title})
    }
    if(newProps.artist) {
      this.setState({artist: newProps.artist})
    }
  }
  render() {
    let title;
    let artist;
    let link = "";
    if(this.state.title) {
      title = this.state.title;
    }

    if(this.props.artist_id) {
      link = `/artist/${this.props.artist_id}`;

    }
    if(this.state.artist) {
      artist = this.state.artist;
    }

    return(
        <div className="left-audio-container">
          <div className="song-info-box">
            {this.state.photoUrl ? <img className="song-photo" src={this.state.photoUrl}></img> : ""}
            <div className="info-song">
              <a className="audio-title">{title}</a>
              <Link to={link} className="audio-artist">{artist}</Link>
            </div>
          </div>
        </div>

    );
  }
}

export default AudioInfo;
