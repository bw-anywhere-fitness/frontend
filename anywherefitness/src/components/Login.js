import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { login } from "../actions";

import "./Login.scss";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      if (localStorage.getItem("instructor") === "true") {
        this.props.history.push("/instructor");
      } else {
        this.props.history.push("/clientview");
      }
    });
  };

  render() {
    return (
      <div className="login-container">
        <nav className="navigation">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <div className="form-container">
        <form onSubmit={this.login}>
          <h1>Log in!</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
