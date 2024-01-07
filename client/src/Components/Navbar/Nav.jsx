import React from "react";
import "./Nav.css";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className="nav">
            <div className="conatiner">
              <div className="tab">
                <NavLink to={"/home"}>
                  <img
                    src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="tab">
                <NavLink to={"/home"} className={"tabcontroller"}>
                  Home
                </NavLink>
              </div>
              <div className="tab">
                <NavLink to={"/"} className={"tabcontroller"}>
                  Login
                </NavLink>
              </div>
              <div className="tab">
                <Avatar className="tabcontroller"></Avatar>
                <div className="avatartab">
                  <div className="avatarcontroller">
                    <div className="avatartabtab">s@gmail.com</div>
                    <div className="avatartabtab">Home</div>
                    <div className="avatartabtab">Login</div>
                    <div className="avatartabtab">Profile</div>
                    <div className="avatartabtab">Post</div>
                    <div className="avatartabtab">Log Out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
