import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { signup } from '../actions';

import "./Login.scss";

class Signup extends React.Component {
    state = {
        newCredentials: {
            username: '',
            password: '',
            instructor: false
        }
    }

    handleChange = e => {
        this.setState({
            newCredentials: {
                ...this.state.newCredentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = e => {
        e.preventDefault();
        this.props.signup(this.state.newCredentials)
            .then(() => {
                if (localStorage.getItem("instructor") === "true") {
                    this.props.history.push('/instructor');
                } else {
                    this.props.history.push('/clientview');
                }
            })
    }

    render() {
        return (
            <div className="login-container">
                <nav className="navigation">
                    <Link className="nav-login" to="/login">Login</Link>
                    <Link className="nav-signup" to="/signup">Signup</Link>
                </nav>
                <div className="form-container">
                    <form onSubmit={this.signup}>
                        <h1>Sign up!</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.newCredentials.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={this.state.newCredentials.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="checkbox"
                            name="instructor"
                            value={this.state.newCredentials.instructor}
                            onChange={this.handleChange}
                        />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

// copied the whoel page from the Login, then edited as appropriate
// I don't think we need mapStateToProps because this was only for a loading animation
// const mapStateToProps = state => ({
//     loggingIn: state.loggingIn
// })

export default connect(
    null,
    { signup }
)(Signup);