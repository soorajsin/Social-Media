import React, { useState } from "react";
import "./PostPage.css";
import apiURL from "../../config";
import { NavLink, useNavigate } from "react-router-dom";

const PostPage = () => {
  const history = useNavigate();
  const urlApi = apiURL.api;
  const [sendData, setSendData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };
  console.log(sendData);

  const submitPost = async (e) => {
    e.preventDefault();

    const { title, description, url } = sendData;

    if (title === "") {
      alert("Title is required");
    } else if (description === "") {
      alert("Description is required");
    } else if (url === "") {
      alert("Image is required");
    } else {
      console.log("post");

      const token = localStorage.getItem("userDataToken");
      // console.log(token);
      const data = await fetch(`${urlApi}/addPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(sendData),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 207) {
        console.log(res);
        history("/home");
        window.location.reload();
      } else {
        console.log("not post");
      }
    }
  };

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
            <input
              type="text"
              name="title"
              value={sendData.title}
              onChange={changeData}
              placeholder="Enter your title ..."
            />
          </div>
          <br />
          <div className="postForm">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              placeholder="Enter description ..."
              name="description"
              value={sendData.description}
              onChange={changeData}
              cols="20"
              rows="2"
            ></textarea>
          </div>
          <br />
          <div className="postForm">
            <label htmlFor="image">Image</label>
            <br />
            <input
              type="url"
              name="url"
              value={sendData.url}
              onChange={changeData}
              placeholder="Enter image url ..."
            />
          </div>
          <br />
          <div className="postForm">
            <button onClick={submitPost}>Post</button>
          </div>
          <br />
          <div className="postForm">
            <h3>
              <NavLink to={"/home"}>Cancel</NavLink>
            </h3>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default PostPage;
