import { combineReducers } from "redux";
import blogsReducer from "./postReducer";

export default combineReducers({
  blogs: blogsReducer,
});
