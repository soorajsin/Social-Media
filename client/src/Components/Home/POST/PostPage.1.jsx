import React, {
          useState
} from "react";
import apiURL from "../../config";

export const PostPage = () => {
          const url = apiURL.api;
          const [sendData, setSendData] = useState({
                    title: "",
                    description: "",
                    image: "",
          });

          const changeData = (e) => {
                    setSendData({
                              ...sendData,
                              [e.target.name]: e.target.value
                    });
          };
          console.log(sendData);

          const submitPost = async (e) => {
                    e.preventDefault();

                    const {
                              title,
                              description,
                              image
                    } = sendData;

                    if (title === "") {
                              alert("Title is required");
                    } else if (description === "") {
                              alert("Description is required");
                    } else if (image === "") {
                              alert("Image is required");
                    } else {
                              console.log("post");

                              const token = localStorage.getItem("userDataToken");
                              console.log(token);
                    }
          };

          return ( <
                    >
                    <
                    div className = "post" >
                    <
                    div className = "postcontainer" >
                    <
                    div className = "postForm" >
                    <
                    h1 > Welcome to Post < /h1> <
                    /div> <
                    br / >
                    <
                    div className = "postForm" >
                    <
                    label htmlFor = "title" > Title < /label> <
                    br / >
                    <
                    input type = "text"
                    name = "title"
                    value = {
                              sendData.title
                    }
                    onChange = {
                              changeData
                    }
                    placeholder = "Enter your title ..." / >
                    <
                    /div> <
                    br / >
                    <
                    div className = "postForm" >
                    <
                    label htmlFor = "description" > Description < /label> <
                    br / >
                    <
                    textarea placeholder = "Enter description ..."
                    name = "description"
                    value = {
                              sendData.description
                    }
                    onChange = {
                              changeData
                    }
                    cols = "20"
                    rows = "2" >
                    < /textarea> <
                    /div> <
                    br / >
                    <
                    div className = "postForm" >
                    <
                    label htmlFor = "image" > Image < /label> <
                    br / >
                    <
                    input type = "file"
                    accept = "image/*"
                    name = "image"
                    value = {
                              sendData.image
                    }
                    onChange = {
                              changeData
                    }
                    /> <
                    /div> <
                    br / >
                    <
                    div className = "postForm" >
                    <
                    button onClick = {
                              submitPost
                    } > Post < /button> <
                    /div> <
                    br / >
                    <
                    /div> <
                    /div> <
                    />
          );
};