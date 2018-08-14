import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
import FeaturedNav from './featured_nav';
// import SongIndexContainer from './song/song_index_container';
import NewReleaseContainer from '../new_releases/new_release_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import AlbumItemDetailContainer from '../albums/album_item_detail_container';
import AudioSoundContainer from '../featured/audio_player/audio_sound_container';
import AudioInfoContainer from '../featured/audio_player/audio_info_container';
class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({showNav: newProps.match.showNav});
  }
  render() {
    const {logout, currentUser} = this.props;
    let newrelease;
    let detail;
    let featuredNav;
    if(this.props.match) {
      if (this.props.match.path === "/browse/newreleases") {
        newrelease = <NewReleaseContainer />
      }
      if (this.props.match.path === "/album/:albumId") {
        detail = <AlbumItemDetailContainer
          albumId={this.props.match.params.albumId} />
        newrelease = "";
      } else {
        featuredNav = <FeaturedNav />;
      }
    }

    return(
      <div className="featured-container">
        <NavSidebar logout={logout} currentUser={currentUser}/>
        {featuredNav}
        {newrelease}
        {detail}
        <div className="audio-controls-container">
          <AudioInfoContainer />
          <AudioPlayerContainer />
          <AudioSoundContainer />
        </div>
      </div>
    );
  }
}

export default Featured;
