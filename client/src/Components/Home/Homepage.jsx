import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextNavigate } from "../Context/ContextProvider";
import apiURL from "../config";

const Homepage = () => {
  const url = apiURL.api;
  const history = useNavigate();
  const postTodata = () => {
    history("/post");
  };

  const { userData } = useContext(contextNavigate);
  // console.log(userData);

  const deletepost = async (postDataId, index) => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${url}/deletePost`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ postDataId }),
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 202) {
      console.log(res);
    } else {
      alert("not delete");
    }
  };

  return (
    <>
      <div className="home">
        <div className="howeContainer">
          <div className="add">
            <button onClick={postTodata}>Post</button>
          </div>
          <div className="show">
            {userData
              ? userData.getData.postData.map((postData, index) => (
                  <div key={index} className="show-data">
                    <img src={postData.url} alt="img" />
                    <p>Title : {postData.title}</p>
                    <p className="description">
                      Description : {postData.description}
                    </p>
                    <div className="deletepost">
                      <i
                        onClick={() => deletepost(postData._id, index)}
                        class="fa-solid fa-delete-left"
                      ></i>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
