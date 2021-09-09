import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "../actions/postActions";

import Posts from "../components/Posts";

const PostsContainer = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(addPosts(res.data));
    };

    fetchPosts();
  }, []);

  return <Posts posts={posts} />;
};

export default PostsContainer;
