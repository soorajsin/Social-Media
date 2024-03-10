import React from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const pageNavigate = useNavigate();
  const goToPost = () => {
    pageNavigate("/post");
  };

  return (
    <>
      <div className="profile">
        <div className="proCon">
          <div className="post">
            <button onClick={goToPost}>Post</button>
          </div>
          <div className="show"></div>
        </div>
      </div>
    </>
  );
};
