const express=require("express");
const SubmissionController=require("./controllers/submission.controller.js")
const UserController=require("./controllers/user.controller.js")
const EvalController=require("./controllers/evaluation.controller.js")
const BatchController=require("./controllers/batch.controller.js")
const StudentController=require("./controllers/student.controller.js")
const app=express();

app.use(express.json());
app.use("/user",UserController);
app.use("/sub",SubmissionController);
app.use("/eval",EvalController);
app.use("/student",StudentController);
app.use("/batch",BatchController);
module.exports=app;