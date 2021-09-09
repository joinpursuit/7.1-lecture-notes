import { ADD_POST, ADD_POSTS } from "../actions/actionTypes";

const initialState = [];

const post = (post) => {
  return {
    userId: null,
    id: post.id,
    title: post.title,
    body: null,
  };
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, post(action.payload)];
    case ADD_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default posts;
