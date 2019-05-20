import Axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    // NEED TO REPLACE API
    return Axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            console.log(res);
            // NEED TO CONFIRM data structure coming back
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => {
            console.log(err);
        })
}