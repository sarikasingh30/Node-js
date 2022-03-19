const express=require("express");
const User=require("./models/user.model");
const userController=require("./controllers/user.controller");// router is there in controller file
const app=express();
app.use(express.json());


app.use("/users", userController);
module.exports=app;