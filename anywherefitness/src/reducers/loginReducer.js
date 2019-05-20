import {
    LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE
} from '../actions';


const initialState = {
    loggingIn: false,
    error: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                loggingIn: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                loggingIn: false,
                error: null,
            }
        default:
            return state;
    }
}