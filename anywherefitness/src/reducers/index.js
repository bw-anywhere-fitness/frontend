import { combineReducers } from 'redux';
import { instructorReducer } from "./instructorReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
    instructorReducer, loginReducer
  });