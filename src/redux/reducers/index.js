import { combineReducers } from "redux";
import generalReducer from "./genaral";
import userReducer from './user'

const reducer = combineReducers({
  user: userReducer,
  general: generalReducer,
});

export default reducer;
