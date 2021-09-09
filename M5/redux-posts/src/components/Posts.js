import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div>
      {Object.keys(posts).map((key) => {
        return <li key={posts[key].id}>{posts[key].title}</li>;
      })}
      <Link to="/posts/new">Add New Post</Link>
    </div>
  );
};

export default Posts;
