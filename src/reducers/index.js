import { combineReducers } from "redux";
import blogsReducer from "./postReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  blogs: blogsReducer,
  users: UserReducer,
});
