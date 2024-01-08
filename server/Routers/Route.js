const express = require("express");
const router = new express.Router();




router.post("/register", async (req, res) => {
          try {
                    console.log(req.body);
          } catch (error) {
                    res.status(500).json({
                              message: "Error in register page"
                    })
          }
})


module.exports = router;