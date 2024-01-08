const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "jkhygtfrvbnhgfdrtyiolkmnjhbvcdsawxz";



const userschema = mongoose.Schema({
          name: {
                    type: String,
                    required: true
          },
          email: {
                    type: String,
                    unique: true,
                    required: true
          },
          password: {
                    type: String,
                    required: true,
                    minlenght: 6
          },
          cpassword: {
                    type: String,
                    required: true,
                    minlenght: 6
          },
          tokens: [{
                    token: {
                              type: String,
                              required: true
                    }
          }]
});



//password hash
userschema.pre("save", async function (next) {
          const user = this;
          if (user.isModified("password")) {
                    user.password = await bcrypt.hash(user.password, 10);
                    user.cpassword = await bcrypt.hash(user.cpassword, 10);
          }
          next();
})


//generate token
userschema.methods.generateToken = async function () {
          try {
                    const token = jwt.sign({
                              _id: this._id
                    }, keysecret)

                    this.tokens = this.tokens.concat({
                              token
                    })

                    await this.save();
                    return token;
          } catch (error) {
                    resizeBy.status(400).json({
                              msg: "Failed to generate token "
                    })
                    console.log(error);
          }
}



const userdb = mongoose.model("users", userschema);
module.exports = userdb;