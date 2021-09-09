import { ADD_POST, ADD_POSTS } from "./actionTypes";

export const addPost = (payload) => {
  return { type: ADD_POST, payload };
};

export const addPosts = (payload) => {
  return { type: ADD_POSTS, payload };
};
