import React from 'react';

class playlistDelete extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    let str = this.props.location.pathname;
    let index = str.lastIndexOf("/")+1;
    let playlistId = str.slice(index,str.length);
    this.props.deletePlaylist(playlistId);
    this.props.history.push('/collection/playlists');
    this.props.closeModal();
  }
  render() {

    return(
      <div className="delete-form">
        <div className="close-delete-form" onClick={e => e.stopPropagation()}>
          <button className="form-close"
            onClick={this.props.closeModal}>X</button>
        </div>
        <div className="delete-warning">
          <h1 className="playlist-header">Do you really want to delete this playlist?</h1>
        </div>
        <div className="delete-options">

          <div className="form-controls" onClick={e => e.stopPropagation()}>
            <button onClick={this.props.closeModal}
              className="cancel-form">CANCEL</button>
            <button onClick={this.handleDelete}
              className="form-submit">DELETE PLAYLIST</button>
          </div>
        </div>
      </div>
    );
  }
}

export default playlistDelete;
