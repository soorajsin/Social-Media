import React from "react";
import "./PostPage.css";

const PostPage = () => {
  return (
    <>
      <div className="post">
        <div className="postcontainer">
          <div className="postForm">
            <h1>Welcome to Post</h1>
          </div>
          <br />
          <div className="postForm">
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" placeholder="Enter your title ..." />
          </div>
          <br />
          <div className="postForm">
            <label htmlFor="description">Description</label>
            <br />
            <textarea placeholder="Enter description ..." cols="20" rows="2"></textarea>
          </div>
          <br />
          <div className="postForm">img</div>
          <br />
          <div className="postForm">
            <button>Post</button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default PostPage;
