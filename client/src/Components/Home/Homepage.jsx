import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const history = useNavigate();
  const postTodata = () => {
    history("/post");
  };

  return (
    <>
      <div className="home">
        <div className="howeContainer">
          <div className="add">
            <button onClick={postTodata}>Post</button>
          </div>
          <div className="show"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
