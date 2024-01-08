const express = require("express");
const router = new express.Router();
const userdb = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../Middleware/authentication");




router.post("/register", async (req, res) => {
          try {
                    // console.log(req.body);
                    const {
                              name,
                              email,
                              password,
                              cpassword
                    } = req.body;

                    if (!name || !email || !password || !cpassword) {
                              res.status(400).json({
                                        error: "All fields must be filled"
                              })
                    } else {
                              const checkUser = await userdb.findOne({
                                        email
                              });

                              if (checkUser) {
                                        res.status(400).json({
                                                  status: 202,
                                                  error: "Email is already in use!"
                                        })
                              } else {
                                        // console.log("done");

                                        const newFOrm = new userdb({
                                                  name,
                                                  email,
                                                  password,
                                                  cpassword
                                        })


                                        const updatedUser = await newFOrm.save();

                                        res.status(201).json({
                                                  status: 201,
                                                  msg: "Registration successfully done",
                                                  data: updatedUser
                                        })
                              }
                    }
          } catch (error) {
                    res.status(500).json({
                              message: "Error in register page"
                    })
          }
})


router.post("/login", async (req, res) => {
          try {
                    // console.log(req.body);
                    const {
                              email,
                              password
                    } = req.body;

                    if (!email || !password) {
                              res.status(400).json({
                                        msg: "Plz fill all fields"
                              })
                    } else {
                              const checkUser = await userdb.findOne({
                                        email
                              });

                              if (!checkUser) {
                                        res.status(400).json({
                                                  status: 202,
                                                  msg: "Invalid Email"
                                        })
                              } else {
                                        const checkPassword = await bcrypt.compare(password, checkUser.password);

                                        if (!checkPassword) {
                                                  res.status(400).json({
                                                            status: 203,
                                                            msg: "Wrong Password!"
                                                  })
                                        } else {
                                                  // console.log("done");

                                                  const token = await checkUser.generateToken();
                                                  // console.log(token);

                                                  res.cookie("auth_token", token, {
                                                            httpOnly: true, // Ensures the cookie is only accessible on the server
                                                            secure: true, // Ensures the cookie is only sent over HTTPS (in a production environment)
                                                            maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds (adjust as needed)
                                                  });

                                                  const result = {
                                                            checkUser,
                                                            token
                                                  }

                                                  res.status(201).json({
                                                            status: 201,
                                                            msg: "Login successfully done",
                                                            updatedUser: result
                                                  })
                                        }
                              }
                    }
          } catch (error) {
                    res.status(500).json({
                              msg: "Failed login"
                    })
                    // console.log(error);
          }
})

router.get("/validator", authenticate, async (req, res) => {
          // console.log("validate");
          // console.log(req.getData);

          if (req.getData) {
                    res.status(201).json({
                              status: 205,
                              msg: "Successfully valid user",
                              getData: req.getData
                    })
          } else {
                    res.status(400).json({
                              msg: "User is not valid"
                    })
          }
})


router.post("/signOut", authenticate, async (req, res) => {
          try {
                    // console.log(req.body);
                    const user = req.getData;

                    if (!user) {
                              res.status(400).json({
                                        msg: "user not found"
                              })
                    } else {
                              // console.log(user);
                              user.tokens = [];

                              const updatedUser = await user.save();
                              // console.log(updatedUser);

                              res.status(201).json({
                                        status: 206,
                                        msg: "Signed out successfully!",
                                        data: updatedUser
                              })
                    }
          } catch (error) {
                    res.status(400).json({
                              msg: "sign out failed"
                    })
          }
})


module.exports = router;