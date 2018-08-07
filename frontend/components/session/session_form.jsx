import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.resetState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleInput(type) {
    return(e=>{
      this.setState({[type]: e.target.value});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( () => {
      this.resetState();
    });
  }
  resetState() {
    if(this.props.formType === "Log In") {
      this.state = {
        username: "",
        password: ""
      };
    } else {
      this.state = {
        name: "",
        username: "",
        password: ""
      };
    }
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    let linkTo = "/signup";
    let nameInput;
    let linkText = "Sign Up";
    if(this.props.formType === "SIGN UP") {
      linkTo = "/login";
      linkText = "Log In";
      nameInput = <input type="text"
        onChange={this.handleInput('name')}
        className="name-input"
        placeholder="What should we call you?"/>;
    }
    return(
      <section>
        <div className="session-logo-container">
          <div className="logo">
            <a className="spotify-logo" href="/"></a>
          </div>
        </div>


        <div className="session-form-container">
          <span className="sessionErrors">{this.renderErrors()}</span>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <input className="username-input" type="text"
              onChange={this.handleInput('username')}
              placeholder="Username" />

            <input className="username-password" type="password"
              onChange={this.handleInput('password')}
              placeholder="Password" />

            {nameInput}
            <div className="session-submit-container">
              <span></span>
              <input className="session-submit"
                type="submit" value={this.props.formType}/>
            </div>


          </form>
          <div className="session-redirect-container">
            <p>Don't have an account?
              <Link to={linkTo}
                onClick={this.props.clearErrors}>
                <span className="sessionlink-text">{linkText}</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
