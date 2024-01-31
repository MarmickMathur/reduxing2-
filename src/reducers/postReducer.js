const blogsReducer = (blogs = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return blogs;
  }
};

export default blogsReducer;
