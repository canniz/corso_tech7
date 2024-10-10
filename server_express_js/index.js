// Dovete prima fare "npm install"

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "home.html");
});

app.post("/sign-in", (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  if(username == "admin" && password == "123456"){
    res.status(200);
    res.send("LOGIN TUTTO A POSTO");
  }else{
    res.status(403);
    res.send("ERROREEEEEE");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
