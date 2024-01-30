import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPosts = () => {
  //bad approach
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: res,
    });
  };
};
