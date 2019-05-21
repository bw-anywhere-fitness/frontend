import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { login } from '../actions';
import Signup from './Signup';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/');
            })
    }

    render() {
        return (
            <Router>
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>Log In</button>
            </form>
            <Link exact to="/signup">Sign up</Link>
            <Route path="/signup" component={Signup} />
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
})

export default connect(
    mapStateToProps, 
    { login }
)( Login );