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
export const deleteClass = (classId, instructorId) => dispatch => {
  dispatch({ type: DEL_CLASS_START });
  axiosWithAuth()
  .delete(`https://anywhere-fitness.herokuapp.com/classes/${classId}`)
    .then(res => {
      axiosWithAuth().get(`https://anywhere-fitness.herokuapp.com/classes/instructor/${instructorId}`)
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

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';
export const fetchStudents = (id) => dispatch => {
  dispatch({ type: FETCH_STUDENTS_START });
  return axiosWithAuth()
    .get(`https://anywhere-fitness.herokuapp.com/classes/${id}/list`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_STUDENTS_FAILURE, payload: err.response.data });
    });
};

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';
export const updatePunchcard = (classId, student) => dispatch => {
  dispatch({ type: UPDATE_START });
  return axiosWithAuth()
    .put(`https://anywhere-fitness.herokuapp.com/classes/${classId}/list/update`, student)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_FAILURE, payload: err.response.data });
    });
};