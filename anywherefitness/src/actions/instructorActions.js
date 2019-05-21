import { axiosWithAuth } from "../axiosWithAuth";

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
