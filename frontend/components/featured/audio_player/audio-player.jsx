import React from 'react';
import AudioSound from './audio-player';
import AudioInfoContainer from './audio_info_container';
import AudioSoundContainer from './audio_sound_container';
//code written by following guide at http://nael.io/2017-03-11-building-a-react-audio-player/
class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      nextSong: "",
      audio: "",
      random: false,
      repeat: false,
      currentTime: 0,
      duration: "0:00",
      songs: [],
      title: "",
      artist: "",
      playedSongs: []};
    this.handlePlay = this.handlePlay.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.addPlayedSongs = this.addPlayedSongs.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);

  }
  componentDidMount() {
    this.currentTimeInterval = null;
    this.setState({currentTime: "0:00"})
    this.audio.onplay = () => {
			this.currentTimeInterval = setInterval( () => {
				this.audio.volume = this.props.volume
			}, 500);

		};
    this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};

    this.audio.addEventListener("timeupdate", () => {
      if(this.audio && this.audio.currentTime === this.audio.duration) {
        this.nextSong();
      }
      if(this.audio.duration) {
        this.setState({duration: this.formatTime(this.audio.duration)})
      }
      let currentTime = this.formatTime(this.audio.currentTime);
       this.setState({currentTime});
      let ratio =
        this.audio.currentTime / this.audio.duration;
      let position =
        this.timeline.offsetWidth * ratio + this.timeline.offsetLeft;
      this.handlePosition(position);
    });
  }
  formatTime(seconds) {
    let min = Math.floor(seconds/60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return min + ":" + seconds;
  }

  componentWillReceiveProps(newProps) {
    
    if(newProps.audio && newProps.audio.trackUrl !== this.state.audio) {
      console.log(newProps.songs);
      if (newProps.songs && newProps.songs.length !== 0) {
        this.setState({ songs: newProps.songs });
      }

      let audio = newProps.audio.trackUrl;
      this.setState({play: true, audio});
    } else if(newProps.songs && newProps.songs.length !== 0) {
      // if(newProps.songs[0].trackUrl !== this.state.audio) {
      //   this.setState({audio: newProps.songs[0].trackUrl})
      // }
      this.setState({songs: newProps.songs});
    }

  }


  handlePlay(e) {
    e.preventDefault();

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
    console.log(this.state.playedSongs.length);
    console.log("state songs, " + this.state.songs.length);
    if(this.state.playedSongs.length >= this.state.songs.length) {
      this.setState({playedSongs: []});
    }
  }
  getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  }
  nextSong() {
    let curSong =  this.state.songs.filter(
      (el, idx) => el.trackUrl === this.state.audio
    );
    if(this.state.repeat && this.audio.currentTime >= this.audio.duration){
      this.audio.currentTime = 0;
      this.setState({play: true, audio: curSong.trackUrl});
      this.audio.play();
      return;
    } else if(this.state.repeat && this.audio.currentTime < this.audio.duration) {
      this.setState({repeat: !this.state.repeat});
      this.repeatButton.classList.remove('rand-selected');
    }
    let songList = this.state.songs;
    let playedSongs = this.state.playedSongs;
    let nextIndex;
    let nextSong;
    this.addPlayedSongs(curSong[0]);
    this.emptyHistory();

    //find nextSong, if next song is already played, find another one
    if(this.state.random) {
      let difference = songList.filter(
        el => !playedSongs.includes(el));
      nextSong = difference[this.getRandomNumber(difference.length)];

    } else {
      nextIndex =
        (songList.indexOf(curSong[0]) + 1) % songList.length;
      nextSong = songList[nextIndex];

    }

    this.props.receiveCurrentSong(nextSong);
    if(!nextSong) {
      nextSong = this.props.nextSong;
    }

    this.props.setTitle(nextSong.title);
    this.props.setArtist(nextSong.artist);

    this.setState({play: true, audio: nextSong.trackUrl});
  }
  prevSong() {
    let playedSongs = this.state.playedSongs;

    if(playedSongs.length === 0){
      this.backButton.setAttribute("disabled", "");
      return;
    }
    let songList = this.state.songs;
    let curSong =  songList.filter(
      (el, idx) => el.trackUrl === this.state.audio
    );

    let length = playedSongs.length;
    if(playedSongs[length-1] === curSong[0]) {
      length = length - 2;
      if(playedSongs < length) return;
    } else {
      length -= 1;
    }

    let song = playedSongs[length];
    let newArr = playedSongs;
    newArr.splice(length);
    let nextSong = this.state.audio;
    if(song){
      this.props.setTitle(song.title);
      this.props.setArtist(song.artist);
    }
    this.props.receiveCurrentSong(song);
    this.setState({play:true, audio: song.trackUrl, nextSong, playedSongs: newArr });
  }

  handlePosition(position) {
    if(!this.audio.duration ) return;
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
  handleRandom(e) {
    e.preventDefault();
    if(!this.state.random === true) {
      this.randButton.classList.add("rand-selected");
    }  else {
      this.randButton.classList.remove("rand-selected");
    }
    this.setState({random: !this.state.random});
  }
  handleRepeat(e) {
    e.preventDefault();
    if(!this.state.repeat === true) {
      this.repeatButton.classList.add("rand-selected");
    }  else {
      this.repeatButton.classList.remove("rand-selected");
    }
    this.setState({repeat: !this.state.repeat});
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
      <div className="audio-controls-container">
        <AudioInfoContainer/>
        <div className="song-playing-bar">
          <div className="middle-container">
            <audio src={this.state.audio} ref={audio => {this.audio = audio} } autoPlay/>
            <div className="audio-controls">
                <button onClick={this.handleRandom} className="song-option-buttons">

                  <i className="fa fa-random fa-light" aria-hidden="true"
                    ref={randButton => {this.randButton = randButton}}>
                    <div className="rand-dot"></div></i>
                </button>
                <button onClick={this.prevSong} className="song-option-buttons"
                  ref={backButton => {this.backButton = backButton} } >
                  <i className="fa fa-step-backward" aria-hidden="true"></i>
                </button>
                <a onClick={this.handlePlay} className="play-button">
                  <i  className={!this.state.play ?
                      "fa fa-play" :
                      "fa fa-pause"}></i>
                  </a>
                  <button onClick={this.nextSong} className="song-option-buttons">
                    <i className="fa fa-step-forward" aria-hidden="true"></i>
                  </button>
                  <button onClick={this.handleRepeat} className="song-option-buttons">
                    <i className="fa fas fa-redo"
                      ref={repeatButton => {this.repeatButton = repeatButton}}>
                      <div className="rand-dot"></div></i>
                  </button>

                </div>
                <div className="sound-timline">
                  <div className="song-time">{this.state.currentTime}</div>
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
                  <div className="song-time">{this.state.duration}</div>
                </div>
          </div>
        </div>
        <AudioSoundContainer />
      </div>
    );
  }
}

export default AudioPlayer;
