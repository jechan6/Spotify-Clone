import React from "react";
class AudioInfo extends React.Component {

  render() {

    return(

      <div className="left-audio-container">
        <div className="song-info-box">
          {this.props.photoUrl ? <img className="song-photo" src={this.props.photoUrl}></img> : ""}
          <div className="info-song">
            <a className="audio-title">{this.props.title}</a>
            <a className="audio-artist">{this.props.artist}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioInfo;
