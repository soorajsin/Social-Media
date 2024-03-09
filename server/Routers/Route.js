const express = require("express");
const router = new express.Router();
const userdb = require("../Model/userSchema");

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

module.exports = router;
