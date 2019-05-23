import { GET_ALL_CLASSES_FAILURE, GET_ALL_CLASSES_START, GET_ALL_CLASSES_SUCCESS,
    GET_CLIENT_CLASSES_FAILURE, GET_CLIENT_CLASSES_START, GET_CLIENT_CLASSES_SUCCESS,
    ENROLL_IN_CLASS_FAILURE, ENROLL_IN_CLASS_START, ENROLL_IN_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE, DELETE_CLASS_START, DELETE_CLASS_SUCCESS,
     } from '../actions';


const initialState = {
    fetchingAllClasses: false,
    classList: [ ],
    fetchingClientClasses: false,
    enrollingInClass: false,
    deletingClass: false,
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
        case ENROLL_IN_CLASS_START:
        return {
            ...state,
            enrollingInClass: true,
            clientReducerError: '',
        }
        case ENROLL_IN_CLASS_SUCCESS:
        return {
            ...state,
            enrollingInClass: false,
            clientClassList: action.payload
        }
        case DELETE_CLASS_START:
        return {
            ...state,
            deletingClass: true,
            clientReducerError: '',
        }
        case DELETE_CLASS_SUCCESS:
        return {
            ...state,
            deletingClass: false,
        }
        default:
            return state;
    }
}