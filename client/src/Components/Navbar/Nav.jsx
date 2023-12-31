import React, { useContext, useEffect } from "react";
import "./Nav.css";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import apiURL from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const Nav = () => {
  const history = useNavigate();
  const { userData, setUserData } = useContext(contextNavigate);
  console.log(userData);
  const url = apiURL.api;
  const navbarValidate = async () => {
    const token = localStorage.getItem("userDataToken");
    // console.log(token);

    try {
      const data = await fetch(`${url}/validator`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const res = await data.json();
      // console.log(res);
      if (res.status === 205) {
        // console.log(res);
        setUserData(res);
      } else {
        console.log("not authorized");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navbarValidate();
  });

  const signOut = async () => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    try {
      const data = await fetch(`${url}/signOut`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const res = await data.json();
      // console.log(res);
      if (res.status === 206) {
        console.log(res);
        localStorage.removeItem("userDataToken");
        history("/");
        window.location.reload();
      } else {
        alert("Log Out failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <Avatar className="tabcontroller txt">
                  {userData
                    ? userData.getData.email.charAt(0).toUpperCase()
                    : ""}
                </Avatar>
                <div className="avatartab">
                  <div className="avatarcontroller">
                    <div className="avatartabtab">
                      {userData ? userData.getData.email : ""}
                    </div>
                    <div className="avatartabtab">
                      <NavLink to={"/home"} className={"avatartabtabNab"}>
                        Home
                      </NavLink>
                    </div>
                    <div className="avatartabtab">
                      <NavLink to={"/post"} className={"avatartabtabNab"}>
                        Post
                      </NavLink>
                    </div>
                    <div className="avatartabtab">
                      <NavLink to={"/profile"} className={"avatartabtabNab"}>
                        Profile
                      </NavLink>
                    </div>
                    <div className="avatartabtab">
                      <NavLink to={"/"} className={"avatartabtabNab"}>
                        Login
                      </NavLink>
                    </div>
                    <div className="avatartabtab" onClick={signOut}>
                      Log Out
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
