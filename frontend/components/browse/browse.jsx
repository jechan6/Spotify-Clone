import React from 'react';
import {Link} from 'react-router-dom';

class Browse extends React.Component {

  render() {
    const {currentUser, logout} = this.props;

    const welcomeGreeting = () => (
      <div>
        <h1>Spotify Clone App</h1>
        <div>
          <h1>Hello {currentUser.name}</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    );

    const otherGreeting = () => (
      <div className="browse-container">
        <h1>Spotify Clone App</h1>
        <div className="session-links">
          <Link className="link-signup" to="/signup">Sign Up</Link>
          <Link className="link-login" to="/login">Log In</Link>
        </div>
      </div>
    );
    return currentUser ? welcomeGreeting() : otherGreeting();
  }

}

export default Browse;
