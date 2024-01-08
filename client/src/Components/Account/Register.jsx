import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./mix.css";
import apiURL from "../config";

const Register = () => {
  const history = useNavigate();
  const url = apiURL.api;
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };
  console.log(sendData);

  const submitRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = sendData;

    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Invalid Email");
    } else if (password === "") {
      alert("Password is Required");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters long");
    } else if (cpassword === "") {
      alert("Confirm Password is Required");
    } else if (cpassword.length < 6) {
      alert("Confirm Password should be at least 6 characters long");
    } else if (password !== cpassword) {
      alert("Both Passwords must match");
    } else {
      console.log("done");

      const data = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        console.log(res);
        history("/");
      } else if (res.status === 202) {
        alert("Email Already Exist");
        history("/");
      } else {
        console.log("not registration");
        alert("Registration Failed");
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="resForm">
            <h1>Welcome to Register</h1>
          </div>
          <br />
          <div className="resForm">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={sendData.name}
              onChange={changeData}
              placeholder="Enter name here..."
            />
          </div>
          <br />
          <div className="resForm">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={sendData.email}
              onChange={changeData}
              placeholder="Enter email here ..."
            />
          </div>
          <br />
          <div className="resForm">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={sendData.password}
              onChange={changeData}
              placeholder="Enter password here ..."
            />
          </div>
          <br />
          <div className="resForm">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              value={sendData.cpassword}
              onChange={changeData}
              placeholder="Enter confirm password here ..."
            />
          </div>
          <br />
          <div className="resForm">
            <button onClick={submitRegister}>Register</button>
          </div>
          <br />
          <div className="resForm">
            <p>
              Already have an account?{" "}
              <NavLink to={"/"} className={"switch"}>
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
