import React from "react";
import Post from "../post/post";
import "./posts.css";

const Posts = () => {
  return (
    <div className="posts">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;