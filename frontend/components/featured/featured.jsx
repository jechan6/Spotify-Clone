import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
import FeaturedNav from './featured_nav';
import SongIndexContainer from './song/song_index_container';
import NewReleaseContainer from '../new_releases/new_release_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
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

    if(this.props.match && this.props.match.path === "/browse/newreleases") {
      newrelease = <NewReleaseContainer />
    }

    let featuredNav;
    // <SongIndexContainer />
    if(this.state.showNav) {
      featuredNav = <FeaturedNav />;
    }
    return(
      <div className="featured-container">
        <NavSidebar logout={logout} currentUser={currentUser}/>
        {featuredNav}
        {newrelease}
        <div className="audio-controls-container">
          <AudioPlayerContainer />
        </div>
      </div>
    );
  }
}

export default Featured;
