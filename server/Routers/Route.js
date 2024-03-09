const express = require("express");
const router = new express.Router();
const userdb = require("../Model/userSchema");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
      res.status(401).json({
        msg: "plz enter all fields"
      });
    } else {
      const checkUser = await userdb.findOne({ email });
      if (checkUser) {
        res.status(400).json({
          status: 201,
          msg: "user already exist"
        });
      } else {
        const newForm = new userdb({
          name,
          email,
          password,
          cpassword
        });

        const saveData = await newForm.save();
        res.status(201).json({
          status: 202,
          msg: "successfully registered",
          data: saveData
        });
      }
    }
  } catch (error) {
    res.status(501).json({
      msg: "not registered",
      error: error
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        msg: "data not found"
      });
    } else {
      const checkUser = await userdb.findOne({ email });
      if (!checkUser) {
        res.status(400).json({
          status: 201,
          msg: "user not found"
        });
      } else {
        const checkPassword = await bcrypt.compare(
          password,
          checkUser.password
        );
        if (!checkPassword) {
          res.status(400).json({
            status: 202,
            msg: "password not matched"
          });
        } else {
          // console.log(checkPassword);

          //generate token
          const token = await checkUser.generateToken();
          // console.log(token);

          //generate cookie
          res.cookie("auth_token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
          });

          const result = { token, checkUser };
          res.status(201).json({
            status: 203,
            msg: "User Login succesfully done",
            data: result
          });
        }
      }
    }
  } catch (error) {
    res.status(400).json({
      msg: "login failed",
      error: error
    });
  }
});

module.exports = router;
