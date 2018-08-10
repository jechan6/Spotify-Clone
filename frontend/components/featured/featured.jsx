import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
import FeaturedNav from './featured_nav';
import SongIndexContainer from './song/song_index_container';
class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {logout, currentUser} = this.props;

    return(
      <div className="featured-container">
        <NavSidebar logout={logout} currentUser={currentUser}/>
        <FeaturedNav />
        <SongIndexContainer />
      </div>
    );
  }
}

export default Featured;
