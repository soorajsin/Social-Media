import mongoose from "mongoose";



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
})



const userdb = mongoose.model("users", userschema);
module.exports = userdb;