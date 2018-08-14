import React from 'react';
import PlaylistContainer from './playlist/playlist_container';
import PlaylistDetailContainer from './playlist/playlist_detail_container';
import CollectionNavContainer from './collection_nav_container';
import NavSidebar from '../featured/nav_sidebar';
import AudioPlayerContainer from '../featured/audio_player/audio_player_container';
import AudioSoundContainer from '../featured/audio_player/audio_sound_container';
import AudioInfoContainer from '../featured/audio_player/audio_info_container';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {logout, currentUser} = this.props;
    let playlists;
    let collectionNav;
    let detail;

    if(this.props.match) {

      if (this.props.match.path === "/collection/playlists") {
        playlists = <PlaylistContainer/>;
      }
      if (this.props.match.path === '/playlist/:playlistId') {

        detail = <PlaylistDetailContainer
          playlistId={this.props.match.params.playlistId} />;
        playlists = "";

      } else {
        collectionNav = <CollectionNavContainer/>;
      }
    }

    return(
      <div className="collection-container">
        <NavSidebar logout={logout} currentUser={currentUser}/>
        {collectionNav}
        {playlists}
        {detail}
        <div className="audio-controls-container">
          <AudioPlayerContainer />
          <AudioSoundContainer />
        </div>
      </div>
    );
  }
}

export default Collection;
