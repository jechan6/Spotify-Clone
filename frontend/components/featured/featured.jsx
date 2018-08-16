import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
import FeaturedNav from './featured_nav';
// import SongIndexContainer from './song/song_index_container';
import NewReleaseContainer from '../new_releases/new_release_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import AlbumItemDetailContainer from '../albums/album_item_detail_container';
import AlbumsContainer from '../albums/albums_container';
import AudioSoundContainer from '../featured/audio_player/audio_sound_container';
import AudioInfoContainer from '../featured/audio_player/audio_info_container';
class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
  }
  handleTitle(title) {

    this.setState({title});
  }
  handleArtist(artist) {
    this.setState({artist});
  }
  componentWillReceiveProps(newProps) {
    this.setState({showNav: newProps.match.showNav});
  }
  render() {
    const {logout, currentUser} = this.props;
    let newrelease;
    let detail;
    let featuredNav;
    let featured;
    if(this.props.match) {
      if (this.props.match.path === "/browse/newreleases") {
        newrelease = <NewReleaseContainer />;
      } else if(this.props.match.path === "/browse/featured") {
        featured =  <div className="show-container">
                      <div className="albums-container">
                        <div className="newrelease-header"><h1>Soundtrack for your day</h1></div>
                          <AlbumsContainer/>
                      </div>
                    </div>
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
        {featured}
        {detail}
      </div>
    );
  }
}

export default Featured;
