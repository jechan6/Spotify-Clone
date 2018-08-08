import React from 'react';
import { withRouter } from 'react-router';
class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {logout, currentUser} = this.props;

    return(
      <div>
        <h1>Welcome to Featured!</h1>
        <h1>Hello {currentUser.name}</h1>
        <button onClick={this.handleSubmit}>Log Out</button>
      </div>
    );
  }
}

export default Featured;
