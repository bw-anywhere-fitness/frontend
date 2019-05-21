import {
  ADD_CLASS_START,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  FETCH_CLASSES_FAILURE,
  FETCH_CLASSES_START,
  FETCH_CLASSES_SUCCESS
} from "../actions";

const initialState = {
  classes: [],
  addingClass: false,
  error: "",
  name: "Jonathan",
  fetchingClasses: false
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
        classes: [...state.classes, ...action.payload]
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
      console.log(action.payload)
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
    default:
      return state;
  }
};
