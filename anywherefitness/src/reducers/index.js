import { combineReducers } from 'redux';
import { instructorReducer } from "./instructorReducer";
import { authReducer } from "./authReducer";
import { clientReducer } from "./clientReducer";

export default combineReducers({
    instructorReducer, authReducer, clientReducer
  });