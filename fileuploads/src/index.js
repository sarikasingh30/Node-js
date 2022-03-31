const express=require("express");
const User=require("./models/users.model");

const userController=require("./controllers/users.controller");
const app=express();
app.use(express.json());
app.use("/users",userController);

module.exports=app;