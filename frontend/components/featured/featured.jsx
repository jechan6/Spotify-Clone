import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
import FeaturedNav from './featured_nav';
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
      </div>
    );
  }
}

export default Featured;
