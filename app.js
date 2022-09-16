const express = require("express");
//const {validation} = require("./middlewares/validation.mw");
const validation = require("./middlewares/validation.mw");
const saveUser = require("./controllers/user.controller");

const app = express(); //create server
const PORT = 3000;

app.use(express.json());


/* ROUTER */
app.post("/users", validation, saveUser);

app.get("/users/:userId", (req, res)=>{
  console.log(req.params.userId)
  res.end()
});

app.get("/", (req, res, next) => {
  res.send("Home");
});

app.listen(PORT, () => {
  console.log("server started at port: " + PORT);
});
