import React from 'react';
//code written by following guide at http://nael.io/2017-03-11-building-a-react-audio-player/
class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {play: false};
    this.handlePlay = this.handlePlay.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
  }
  componentDidMount() {

    this.audio.addEventListener("timeupdate", () => {
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.timeline.offsetWidth * ratio + this.timeline.offsetLeft;

      this.handlePosition(position);
    });
  }
  componentWillReceiveProps() {
    // this.setState({play: true});
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
  handlePosition(position) {

    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if(handleLeft >= 0 && handleLeft <= this.timeline.offsetLeft) {
      this.handle.style.width = handleLeft + "px";
    }
    if(handleLeft < 0) {
      this.handle.style.width = "0px";
    }
  
    if(handleLeft > this.timeline.offsetLeft) {

      this.handle.style.width = timelineWidth + "px";
    }
  }
  mouseMove(e) {
    this.handlePosition(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
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
      <div className="audio-controls">
        <audio src={this.props.audio} ref={audio => {this.audio = audio} }/>
        <div onClick={this.handlePlay}>
          <i className={!this.state.play ?
            "fa fa-play play-button" :
            "fa fa-pause-circle play-button"}></i>
        </div>
        <div className="progress-bar"
          onClick={this.mouseMove}
          ref={(timeline) => { this.timeline = timeline }}>
          <div className="handle"
            onMouseDown={this.mouseDown}
            ref={(handle) => { this.handle = handle }}>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
