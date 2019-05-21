import React from "react";
import { connect } from "react-redux";
import { signup } from '../actions';


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
                // this.props.history.push('/clientview');
                this.props.history.push('/');
            })
    }

    render() {
        return (
            <form onSubmit={this.signup}>
                <h1>Signup</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.newCredentials.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={this.state.newCredentials.password}
                    onChange={this.handleChange}
                />
                <input 
                    type="checkbox"
                    name="instructor"
                    value={this.state.newCredentials.instructor}
                    onChange={this.handleChange}
                />
                <button>Log In</button>
            </form>
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
)( Signup );