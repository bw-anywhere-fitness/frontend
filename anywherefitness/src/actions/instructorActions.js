import { axiosWithAuth } from "../axiosWithAuth";

export const FETCH_CLASSES_START = 'FETCH_CLASSES_START';
export const FETCH_CLASSES_SUCCESS = 'FETCH_CLASSES_SUCCESS';
export const FETCH_CLASSES_FAILURE = 'FETCH_CLASSES_FAILURE';
export const getData = (id) => dispatch => {
  dispatch({ type: FETCH_CLASSES_START });
  axiosWithAuth()
    .get(`https://anywhere-fitness.herokuapp.com/classes/instructor/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_CLASSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_CLASSES_FAILURE, payload: err.response.data });
    });
};


export const ADD_CLASS_START = "ADD_CLASS_START";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE";
export const addClass = newClass => dispatch => {
  dispatch({ type: ADD_CLASS_START });
  axiosWithAuth()
    .post("https://anywhere-fitness.herokuapp.com/classes", newClass)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CLASS_FAILURE, payload: err.response.data });
    });
};
