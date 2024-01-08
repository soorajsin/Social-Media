const jwt = require("jsonwebtoken");
const userdb = require("../Model/userSchema");
const keysecret = "jkhygtfrvbnhgfdrtyiolkmnjhbvcdsawxz";

const authenticate = async (req, res, next) => {
          const token = req.headers.authorization;
          // console.log(token);

          if (!token) {
                    res.status(400).json({
                              msg: "token not found"
                    })
          } else {
                    // console.log(token);
                    const verifyToken = await jwt.verify(token, keysecret);

                    if (!verifyToken) {
                              res.status(400).json({
                                        msg: "Invalid Token"
                              })
                    } else {
                              // console.log(verifyToken);

                              const getData = await userdb.findOne({
                                        _id: verifyToken._id
                              })

                              if (!getData) {
                                        res.status(400).json({
                                                  msg: "User Not Found!"
                                        })
                              } else {
                                        // console.log(getData);

                                        req.getData = getData;

                                        next();
                              }
                    }
          }
}


module.exports = authenticate;