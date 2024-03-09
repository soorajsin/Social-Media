const express = require("express");
const app = express();
require("./DB/Connection");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "Server started"
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
