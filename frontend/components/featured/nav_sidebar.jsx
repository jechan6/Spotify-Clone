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
        <div className="nav-topsection">
          <nav className="nav-bar">
            <div className="navbar-logo">
              <a className="logo" href="/browse/featured"></a>
            </div>
            <ul className="nav-bar-ul">
              <li className="ul-item"><Link
                to="/search" className="navitem-text">
                <i className="fa fa-search" aria-hidden="true"></i>
                Search</Link>
              </li>
              <li className="ul-item">
                <Link to="/browse/featured" className="navitem-text">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  Home</Link>
              </li>
              <li className="ul-item">
                <div className="slash-icon">
                  <div className="icon-doubleslash">||</div>
                  <div className="icon-slash">\</div>
                  <Link to="/collection/playlists"
                    className="navitem-text slash-link">
                    Your Library </Link>
                </div>
              </li>
            </ul>
            </nav>

            <button onClick={this.handleSubmit}>Log Out</button>
            <div className="profile-container">
              <img className="profile-pic" src={currentUser.photoUrl} />
              <h3>{currentUser.name}</h3>
            </div>

        </div>

      </div>

    );
  }

}

export default NavSidebar;
