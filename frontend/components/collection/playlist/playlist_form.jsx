import React from 'react';
import {Link} from 'react-router-dom';
class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {

    return(e) => {
      this.setState({[type]: e.target.value,
        author_id: this.props.currentUser.id});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state).then(
      res => {
        let playlistId = Object.keys(res.payload.playlist)[0];
        this.props.closeModal();
        this.props.history.push("/playlist/" + playlistId);
      }
    );

  }

  render() {

    return (
      <div className="playlistform-container">

        <div className="playlist-close" onClick={e => e.stopPropagation()}>
          <button className="form-close"
            onClick={this.props.closeModal}>X</button>
        </div>
        <div className="playlist-header">
          <h1>Create new playlist</h1>
        </div>
        <div className="playlistform-content">
          <div className="center-form">

            <div className="playlist-input">
              <div className="form-box">
                <h4 className="input-label">Playlist Name</h4>
                <input onChange={this.handleInput('title')}
                  type="text" className="playlistform-input"
                  placeholder="Start typing..."
                  value={this.state.title}></input>
              </div>
            </div>
          </div>
        </div>
        <div onClick={e => e.stopPropagation()}
          className="form-controls">

          <button onClick={this.props.closeModal}
              className="cancel-form">CANCEL</button>

          <button onClick={this.handleSubmit}
            className="form-submit">CREATE</button>

        </div>
      </div>
    );
  }
}

export default PlaylistForm;
