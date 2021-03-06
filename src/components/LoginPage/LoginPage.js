import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="backgroundImageLogin">
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              {/* <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              /> */}
                <InputGroup >
                  <Input name="username" size="lg" placeholder="Username" value={this.state.username} onChange={this.handleInputChangeFor('username')} />
                  <InputGroupAddon addonType="append">
                    {/* <Button color="secondary" onClick={this.handleSubmit}>Search!!</Button> */}
                  </InputGroupAddon>
                </InputGroup>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              {/* <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /> */}
                <InputGroup >
                  <Input name="password" size="lg" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChangeFor('password')} />
                  <InputGroupAddon addonType="append">
                    {/* <Button color="secondary" onClick={this.handleSubmit}>Search!!</Button> */}
                  </InputGroupAddon>
                </InputGroup>
            </label>
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <center>
          <Button
            type="button"
            className="link-button"
            size="sm"
            color="primary"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
        </center>
      </div>

      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
