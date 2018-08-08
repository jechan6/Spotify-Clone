import React from 'react';
import {Link} from 'react-router-dom';

class Browse extends React.Component {

  render() {
    const {currentUser, logout} = this.props;

    const welcomeGreeting = () => (
      <div>
        <h1>Spotify Clone App</h1>

      </div>
    );

    const otherGreeting = () => (

      <div className="browse-container">
        <div className="splash-container">

          <div className="left-browse">

            <span className="logo"></span>

            <div className="session-links">
              <Link className="link-signup" to="/signup">Sign Up</Link>
              <div className="separator">
                <div className="separator-line"></div>
                <div className="separator-text">ALREADY HAVE AN ACCOUNT?</div>
                <div className="separator-line"></div>
              </div>
              <Link className="link-login" to="/login">Log In</Link>
            </div>
          </div>
          <div className="browse-middlebar"></div>
          <div className="right-browse">
            <h1>Get the right music,<br/>
            right now
            </h1>
            <p>Listen to millions of songs for free</p>
            <ul>
              <li><i className="fa fa-check" aria-hidden="true">
                </i>Search & discover music you'll love
              </li>
              <li><i className="fa fa-check" aria-hidden="true">
                </i>Create playlists of your favorite music
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    return currentUser ? welcomeGreeting() : otherGreeting();
  }

}

export default Browse;
