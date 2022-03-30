const express=require("express");
const SubmissionController=require("./controllers/submission.controller.js")
const UserController=require("./controllers/user.controller.js")
const app=express();

app.use(express.json());
app.use("/user",UserController);
app.use("/sub",SubmissionController);

module.exports=app;