import {
  ADD_CLASS_START,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE
} from "../actions";

const initialState = {
  classes: [
      {
          image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=abs-adult-athlete-1229356.jpg&fm=jpg",
          title: "ABC",
          date: "8:00PM Friday"
      }
  ],
  addingClass: false,
  error: "",
  name: "Jonathan"
};

export const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
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
        classes: [...action.payload]
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
