import { GET_ALL_CLASSES_FAILURE, GET_ALL_CLASSES_START, GET_ALL_CLASSES_SUCCESS,
    GET_CLIENT_CLASSES_FAILURE, GET_CLIENT_CLASSES_START, GET_CLIENT_CLASSES_SUCCESS,
     } from '../actions';


const initialState = {
    fetchingAllClasses: false,
    classList: [ ],
    fetchingClientClasses: false,
    clientClassList: [ ],
    clientReducerError: '',
}

export const clientReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_ALL_CLASSES_START: 
        return {
            ...state,
            fetchingAllClasses: true,
            clientReducerError: '',
        }
        case GET_ALL_CLASSES_SUCCESS:
        return {
            ...state,
            fetchingAllClasses: false,
            classList: action.payload
        }
        case GET_CLIENT_CLASSES_START:
        return {
            ...state,
            fetchingClientClasses: true,
            clientReducerError: '',
        }
        case GET_CLIENT_CLASSES_SUCCESS:
        return {
            ...state,
            fetchingClientClasses: false,
            clientClassList: action.payload
        }
        default:
            return state;
    }
}