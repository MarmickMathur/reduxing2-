import { combineReducers } from "redux";
const blogsReducer = (blogs = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return blogs.concat(action.payload.data);
  }
  return blogs;
};

export default combineReducers({
  blogs: blogsReducer,
});
