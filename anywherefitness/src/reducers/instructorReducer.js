import {
  ADD_CLASS_START,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  FETCH_CLASSES_FAILURE,
  FETCH_CLASSES_START,
  FETCH_CLASSES_SUCCESS,
  DEL_CLASS_FAILURE,
  DEL_CLASS_START,
  DEL_CLASS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_START
} from "../actions";

const initialState = {
  classes: [],
  addingClass: false,
  error: "",
  fetchingClasses: false,
  deletingClass: false,
  fetchingStudents: false,
  students: [],
  updatingPunchcard: false
};

export const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES_START:
      return {
        ...state,
        fetchingClasses: true
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        fetchingClasses: false,
        classes: [...action.payload]
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        fetchingClasses: false,
        error: action.payload.message
      };
    case ADD_CLASS_START:
      return {
        ...state,
        addingClass: true,
        error: ""
      };
    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        addingClass: false,
        classes: [...state.classes, action.payload]
      };
    case ADD_CLASS_FAILURE:
      return {
        ...state,
        addingClass: false,
        error: action.payload.message
      };
    case DEL_CLASS_START:
      return {
        ...state,
        deletingClass: true
      };
    case DEL_CLASS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        deletingClass: false,
        classes: [...action.payload]
      };
    case DEL_CLASS_FAILURE:
      return {
        ...state,
        deletingClass: false,
        error: action.payload.message
      };
    case FETCH_STUDENTS_START:
      return {
        ...state,
        fetchingStudents: true
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        fetchingStudents: false,
        students: [...action.payload]
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        fetchingStudents: false,
        error: action.payload.message
      };
    case UPDATE_START:
      return {
        ...state,
        updatingPunchcard: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        updatingPunchcard: false
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        updatingPunchcard: false
      };

    default:
      return state;
  }
};
