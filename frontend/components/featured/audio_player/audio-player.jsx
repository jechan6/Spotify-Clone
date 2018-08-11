import React from 'react';
//code written by following guide at http://nael.io/2017-03-11-building-a-react-audio-player/
class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      nextSong: "",
      audio: "",
      playedSongs: []};
    this.handlePlay = this.handlePlay.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.addPlayedSongs = this.addPlayedSongs.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }
  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      if(this.audio.currentTime === this.audio.duration) {
        this.nextSong();
      }
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.timeline.offsetWidth * ratio + this.timeline.offsetLeft;
      this.handlePosition(position);
    });
  }
  componentWillReceiveProps(newProps) {
    if(!newProps.audio && !newProps.nextSong) {
      return;
    }
    this.addPlayedSongs(newProps.audio);
    let audio = newProps.audio.trackUrl;
    let nextSong = newProps.nextSong.trackUrl;
    this.setState({play: true, audio, nextSong});

  }
  handlePlay() {
    if(this.state.play) {
      this.audio.pause();
      this.setState({play: false});
    } else {
      this.audio.play();
      this.setState({play: true});
    }
  }
  addPlayedSongs(song) {
    let newArr = this.state.playedSongs;
    newArr.push(song);
    this.setState({playedSongs: newArr});

  }
  emptyHistory() {
    if(this.state.playedSongs.length === this.props.songs) {
      this.setState({playedSongs: []});
    }
  }
  nextSong() {
    //find currentsong playing
    let curSong =  this.props.songs.filter(
      (el, idx) => el.trackUrl === this.state.nextSong
    );
    this.emptyHistory();
    this.addPlayedSongs(curSong[0]);
    //find nextSong, if next song is already played, find another one
    let nextIndex = (this.props.songs.indexOf(curSong[0]) + 1) % this.props.songs.length;
    while(this.state.playedSongs.includes(this.props.songs[nextIndex])) {
      nextIndex = (nextIndex + 1) % this.props.songs.length;
    }

    let nextSong = this.props.songs[nextIndex].trackUrl;
    const {songs} = this.props.songs;

    this.setState({play: true, audio: this.state.nextSong, nextSong});
  }
  prevSong() {
    if(this.state.playedSongs.length === 0)  return;
    let curSong =  this.props.songs.filter(
      (el, idx) => el.trackUrl === this.state.audio
    );

    let length = this.state.playedSongs.length;
    if(this.state.playedSongs[length-1] === curSong[0]) {
      length = length - 2;
      if(this.state.playedSongs < length) return;
    } else {
      length -= 1;
    }

    let song = this.state.playedSongs[length];
    let newArr = this.state.playedSongs;
    newArr.splice(length);
    let nextSong = this.state.audio;

    this.setState({play:true, audio: song.trackUrl, nextSong, playedSongs: newArr });
  }

  handlePosition(position) {

    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if(handleLeft >= 0 && handleLeft <= this.timeline.offsetWidth) {
      this.handle.style.width = handleLeft + "px";
      this.handleCircle.style.marginLeft = handleLeft + "px";
    }

    if(handleLeft < 0) {
      this.handle.style.width = "0px";
      this.handleCircle.style.marginLeft = "0px";
    }

    if(handleLeft > this.timeline.offsetWidth) {
      this.handleCircle.style.marginLeft = this.timeline.offsetWidth+ "px";
      this.handle.style.width = this.timeline.offsetWidth + "px";
    }
  }
  mouseMove(e) {
    this.handlePosition(e.pageX);
    this.audio.currentTime =
      ((e.pageX - this.timeline.offsetLeft)
      / this.timeline.offsetWidth) * this.audio.duration;
  }

  mouseDown(e){
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  }

  mouseUp(e) {

    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  }

  render() {

    return(
      <div className="song-playing-bar">
        <audio src={this.state.audio} ref={audio => {this.audio = audio} } autoPlay/>
        <div className="audio-controls">
            <button className="song-option-buttons">
              <i className="fa fa-random fa-light" aria-hidden="true"></i>
            </button>
            <button onClick={this.prevSong} className="song-option-buttons">
              <i className="fa fa-step-backward" aria-hidden="true"></i>
            </button>
            <a className="play-button">
              <i onClick={this.handlePlay} className={!this.state.play ?
                "fa fa-play" :
                "fa fa-pause"}></i>
            </a>
            <button onClick={this.nextSong} className="song-option-buttons">
              <i className="fa fa-step-forward" aria-hidden="true"></i>
            </button>
            <button className="song-option-buttons">
              <i className="fa fas fa-redo"></i>
            </button>
        </div>

        <div className="progress-bar"
          onClick={this.mouseMove}
          ref={(timeline) => { this.timeline = timeline }}>
          <div className="progress-timeline">
            <div className="handle"
              onMouseDown={this.mouseDown}
              ref={(handle) => { this.handle = handle }}>
            </div>
            <div className="handle-circle"
              onMouseDown={this.mouseDown}
              ref={(handleCircle) => {this.handleCircle = handleCircle}}>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AudioPlayer;
