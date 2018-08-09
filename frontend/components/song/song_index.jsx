import React from 'react';

class SongIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }
  render() {
    const {song} = this.props;
    return(
      <div>

      </div>
    );
  }
}
export default SongIndex;
