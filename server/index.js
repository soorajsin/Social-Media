const express = require("express");
const app = express();
require("./DB/Connection");
const cors = require("cors");
const router = require("./Routers/Route");
const port = process.env.PORT || 4000;


app.get("/", (req, res) => {
          res.status(400).json({
                    msg: "server started"
          })
})



app.use(express.json());
app.use(cors());
app.use(router);



app.listen(port, () => {
          console.log(`Server is running on ${port}`)
})