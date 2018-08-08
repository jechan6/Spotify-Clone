import React from 'react';
import {Link} from 'react-router-dom';
class NavSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const {currentUser} = this.props;

    return(
      <div className="nav-container">
        <nav className="nav-bar">
          <ul className="nav-bar-ul">
            <li className="ul-item"><Link to="/search">Search</Link></li>
            <li className="ul-item"><Link to="/browse/featured">Home</Link></li>
            <li className="ul-item"><Link to="/collection/playlists">Your Library</Link></li>
          </ul>
        </nav>
        <button onClick={this.handleSubmit}>Log Out</button>
      </div>

    );
  }

}

export default NavSidebar;
