import Axios from "axios";
import { axiosWithAuth } from '../axiosWithAuth';

export const GET_ALL_CLASSES_START = "GET_ALL_CLASSES_START";
export const GET_ALL_CLASSES_SUCCESS = "GET_ALL_CLASSES_SUCCESS";
export const GET_ALL_CLASSES_FAILURE = "GET_ALL_CLASSES_FAILURE";

export const getAllClasses = creds => dispatch => {
    dispatch({ type: GET_ALL_CLASSES_START });
    axiosWithAuth().get('https://anywhere-fitness.herokuapp.com/classes', creds)
        .then(res => {
            // console.log("get classes in clientActions.js", res);
            dispatch({ type: GET_ALL_CLASSES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_ALL_CLASSES_FAILURE })
        })
}

export const GET_CLIENT_CLASSES_START = "GET_CLIENT_CLASSES_START";
export const GET_CLIENT_CLASSES_SUCCESS = "GET_CLIENT_CLASSES_SUCCESS";
export const GET_CLIENT_CLASSES_FAILURE = "GET_CLIENT_CLASSES_FAILURE";

export const getClientClasses = user_id => dispatch => {
    dispatch({ type: GET_ALL_CLASSES_START });
    console.log("getting Client classes, user_id is", user_id);
    axiosWithAuth().get(`https://anywhere-fitness.herokuapp.com/classes/client/${user_id}`)
        .then(res => {
            console.log("get client classes in clientActions.js", res);
            dispatch({ type: GET_CLIENT_CLASSES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_CLIENT_CLASSES_FAILURE })
        })
}

export const ENROLL_IN_CLASS_START = "ENROLL_IN_CLASS_START";
export const ENROLL_IN_CLASS_SUCCESS = "ENROLL_IN_CLASS_SUCCESS";
export const ENROLL_IN_CLASS_FAILURE = "ENROLL_IN_CLASS_FAILURE";

export const enrollInClass = ( class_id, user_id) => dispatch => {
    dispatch({ type: ENROLL_IN_CLASS_START });
    console.log("class ID", class_id);
    axiosWithAuth().post(`https://anywhere-fitness.herokuapp.com/classes/add/${class_id}`, {user_id:user_id})
        .then(res => {
            console.log("enrolling in class response", res);
            dispatch({ type: ENROLL_IN_CLASS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ENROLL_IN_CLASS_FAILURE })
        })
}

