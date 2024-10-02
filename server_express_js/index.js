const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Ciao mondo");
});

app.post("/sign-in", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
