import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Postpage.css";
import apiURL from "../../config";

const PostPage = () => {
  const api = apiURL.url;
  const [sendData, setSendData] = useState({
    title: "",
    description: "",
    pimg: ""
  });

  const changeData = (e) => {
    setSendData({
      ...sendData,
      [e.target.name]: e.target.value
    });
  };
  console.log(sendData);

  const submitToPost = async (e) => {
    e.preventDefault();

    const { title, description, pimg } = sendData;
    if (!title || !description || !pimg) {
      alert("Please enter all fields");
    } else {
      console.log("post");
      const data = await fetch(`${api}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData)
      });
      const res = await data.json();
      console.log(res);
    }
  };

  return (
    <>
      <div className="reg">
        <div className="regCon">
          <div className="form">
            <h2>Welcome to Post</h2>
          </div>
          <div className="form">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={sendData.title}
              onChange={changeData}
              placeholder="Enter title here ..."
            />
          </div>
          <div className="form">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              name="description"
              value={sendData.description}
              onChange={changeData}
              placeholder="Enter description here ..."
              cols="30"
              rows="2"
            ></textarea>
          </div>
          <div className="form">
            <label htmlFor="pimg">Upload Image</label>
            <br />
            <input
              type="file"
              name="pimg"
              //   value={sendData.pimg}
              accept="image/*"
              onChange={changeData}
              placeholder="Enter img ..."
            />
          </div>
          <div className="form">
            <button onClick={submitToPost}>POST</button>
          </div>
          <div className="form">
            <p>
              <NavLink to={"/profile"}>Cancel</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
