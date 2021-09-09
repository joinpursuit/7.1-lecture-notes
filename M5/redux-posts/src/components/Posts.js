import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div>
      {/* map posts so that each post title is rendered */}
      <Link to="/posts/new">Add New Post</Link>
    </div>
  );
};

export default Posts;
