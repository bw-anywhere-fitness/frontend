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

export const getClientClasses = (creds, id) => dispatch => {
    dispatch({ type: GET_ALL_CLASSES_START });
    axiosWithAuth().get(`https://anywhere-fitness.herokuapp.com/classes/client/${id}`, creds)
        .then(res => {
            console.log("get client classes in clientActions.js", res);
            dispatch({ type: GET_CLIENT_CLASSES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_CLIENT_CLASSES_FAILURE })
        })
}



export const GET_PASSES_START = "GET_PASSES_START";
export const GET_PASSES_SUCCESS = "GET_PASSES_SUCCESS";
export const GET_PASSES_FAILURE = "GET_PASSES_FAILURE";

export const getPasses = creds => dispatch => {
    // console.log("creds", creds)
    dispatch({ type: GET_PASSES_START })
    // axiosWithAuth().get('api placeholder')
    //     .then(res => {
    //         // console.log("response", res);
    //         dispatch({ type: GET_PASSES_SUCCESS, payload: res.data})
    //     })
    //     .catch(err => {
    //         // console.log(err);
    //         dispatch({ type: GET_PASSES_FAILURE })
    //     })
}

// export const PURCHASE_PASSES_START = "PURCHASE_PASSES_START";
// export const PURCHASE_PASSES_SUCCESS = "PURCHASE_PASSES_SUCCESS";
// export const PURCHASE_PASSES_FAILURE = "PURCHASE_PASSES_FAILURE";

// export const purchasePasses = clientID => dispatch => {
//     dispatch({ type: PURCHASE_PASSES_START })
//     axiosWithAuth().put(`api placeholder`, clientID)
//         .then(res => {
//             dispatch({ type: PURCHASE_PASSES_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: PURCHASE_PASSES_FAILURE })
//         })
// }

export const USE_ONE_PASS_START = "USE_ONE_PASS_START";
export const USE_ONE_PASS_SUCCESS = "USE_ONE_PASS_SUCCESS";
export const USE_ONE_PASS_FAILURE = "USE_ONE_PASS_FAILURE";

// export const useOnePass = clientID => dispatch => {
//     dispatch({ type: USE_ONE_PASS_START })
//     axiosWithAuth().put(`api placeholder`, clientID)
//         .then(res => {
//             dispatch({ type: USE_ONE_PASS_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: USE_ONE_PASS_FAILURE })
//         })
// }







