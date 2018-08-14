import React from 'react';
class AudioSound extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      volume: 1
    };
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
  }
  componentDidMount() {
    this.setState({volume: this.props.volume});

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
    if(handleLeft > this.timeline.offsetWidth || this.state.volume === 1) {
      this.handleCircle.style.marginLeft = this.timeline.offsetWidth+ "px";
      this.handle.style.width = this.timeline.offsetWidth + "px";
    }
  }
  mouseMove(e) {
    this.handlePosition(e.pageX);
    let volume =
      ((e.pageX - this.timeline.offsetLeft)
      / this.timeline.offsetWidth) * 1;
    if(volume>=1) {
      volume = 1;
    } else if(volume <= 0) {
      volume = 0;
    }

    this.setState({volume});
    this.props.setVolume(this.state.volume);
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
      <div className="right-audio-container">
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
    )
  }
}

export default AudioSound;
