import React from 'react';

class Featured extends React.Component {


  render() {
    const {logout, currentUser} = this.props;
    return(
      <div>
        <h1>Welcome to Featured!</h1>
        <h1>Hello {currentUser.name}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default Featured;
