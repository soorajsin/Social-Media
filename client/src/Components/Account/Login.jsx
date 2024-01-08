import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./mix.css";
import apiURL from "../config";

const Login = () => {
  const history = useNavigate();
  const url = apiURL.api;
  const [sendData, setSendData] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };
  console.log(sendData);

  const submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = sendData;

    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("The length of the password should be at least 6 characters");
    } else {
      console.log("done");

      const data = await fetch(`${url}/login`, {
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
        localStorage.setItem("userDataToken", res.updatedUser.token);
        history("/home");
      } else if (res.status === 202) {
        alert("Email not found");
      } else if (res.status === 203) {
        alert("Password is not matched");
      } else {
        console.log("failed to login");
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="resForm">
            <h1>Welcome to Login</h1>
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
            <button onClick={submitLogin}>Login</button>
          </div>
          <br />
          <div className="resForm">
            <p>
              have not an account?{" "}
              <NavLink to={"/register"} className={"switch"}>
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
