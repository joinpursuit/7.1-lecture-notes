import { combineReducers } from "redux";
import lightReducer from "./lightReducer";
import plumbingReducer from "./plumbingReducer";

export default combineReducers({
  lights: lightReducer,
  plumbing: plumbingReducer,
});
