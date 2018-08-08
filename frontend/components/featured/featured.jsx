import React from 'react';
import { withRouter } from 'react-router';
import NavSidebar from './nav_sidebar';
class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {logout, currentUser} = this.props;

    return(
      <div>
        <NavSidebar logout={logout} currentUser={currentUser}/>
      </div>
    );
  }
}

export default Featured;
