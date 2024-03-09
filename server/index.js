const express = require("express");
const app = express();
require("./DB/Connection");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const router = require("./Routers/Route");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "Server started"
  });
});

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
