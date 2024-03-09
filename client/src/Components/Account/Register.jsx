import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="reg">
        <div className="regCon">
          <div className="form">
            <h1>Welcome to Register</h1>
          </div>
          <div className="form">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" placeholder="Enter name here ..." />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Enter email here ..." />
          </div>
          <div className="form">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Enter password here ..." />
          </div>
          <div className="form">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter confirm password here ..."
            />
          </div>
          <div className="form">
            <button>Register</button>
          </div>
          <div className="form">
            <p>
              I have already account ? <NavLink to={"/"}>Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
