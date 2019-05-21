import { combineReducers } from 'redux';
import { instructorReducer } from "./instructorReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
    instructorReducer, authReducer
  });