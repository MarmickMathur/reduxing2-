import jsonplaceholder from "../api/jsonplaceholder";
import _, { forEach } from "lodash";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: res.data,
    });
  };
};

export const fetchuser = (id) => {
  return async (dispatch, getState) => {
    const res = await jsonplaceholder.get("/users/" + id);
    dispatch({ type: "FETCH_USER", payload: res.data });
  };
};

// memoized version
// export const fetchuser = (id) => {
//   return (dispatch, getState) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonplaceholder.get("/users/" + id);
//   dispatch({ type: "FETCH_USER", payload: res.data });
// });

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    // console.log("fired");
    // whenever we call an actioncreator in an actionn creator we need to dispatch it too so that redux thunk picks it and runs it
    await dispatch(fetchPosts());
    // console.log(getState().blogs);

    const userIds = _.uniq(_.map(getState().blogs, "userId"));
    userIds.forEach((id) => dispatch(fetchuser(id)));
  };
};
