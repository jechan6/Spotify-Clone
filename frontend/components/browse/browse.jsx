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
      <div>
        <h1>Spotify Clone App</h1>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
    return currentUser ? welcomeGreeting() : otherGreeting();
  }

}

export default Browse;
