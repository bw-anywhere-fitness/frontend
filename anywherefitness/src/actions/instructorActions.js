import { axiosWithAuth } from "../axiosWithAuth";
import axios from "axios";

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
  return axiosWithAuth()
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


export const DEL_CLASS_START = 'DEL_CLASS_START';
export const DEL_CLASS_SUCCESS = 'DEL_CLASS_SUCCESS';
export const DEL_CLASS_FAILURE = 'DEL_CLASS_FAILURE';
export const deleteClass = id => dispatch => {
  dispatch({ type: DEL_CLASS_START });
  axiosWithAuth()
  .delete(`https://anywhere-fitness.herokuapp.com/classes/${id}`)
    .then(res1 => {
      axiosWithAuth().get(`https://anywhere-fitness.herokuapp.com/classes/instructor/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: DEL_CLASS_SUCCESS, payload: res.data });
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DEL_CLASS_FAILURE, payload: err.data });
    });
};
