import React from "react";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className="nav">
            <div className="navCon">
              <div className="tab">
                <NavLink to={"/home"} className={"tabNav"}>
                  <img
                    src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="tab">
                <NavLink to={"/home"} className={"tabNav"}>
                  Home
                </NavLink>
              </div>
              <div className="tab">
                <NavLink to={"/profile"} className={"tabNav"}>
                  Profile
                </NavLink>
              </div>
              <div className="tab">
                <NavLink to={"/"} className={"tabNav"}>
                  Login
                </NavLink>
              </div>
              <div className="tab">
                <NavLink className={"tabNav"}>
                  <Avatar></Avatar>
                </NavLink>
                <div className="ava">
                  <div className="avaCon">
                    <div className="avatab">
                      <NavLink className={"avatabNav"}>Email</NavLink>
                    </div>
                    <div className="avatab">
                      <NavLink to={"/home"} className={"avatabNav"}>
                        Home
                      </NavLink>
                    </div>
                    <div className="avatab">
                      <NavLink to={"profile"} className={"avatabNav"}>
                        Profile
                      </NavLink>
                    </div>
                    <div className="avatab">
                      <NavLink to={"/"} className={"avatabNav"}>
                        login
                      </NavLink>
                    </div>
                    <div className="avatab">
                      <NavLink className={"avatabNav"}>Log Out</NavLink>
                    </div>
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
