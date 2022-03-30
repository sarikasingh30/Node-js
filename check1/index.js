const express=require("express");
const app=express();

 app.use(logger); 
app.use(logger1); 
app.get("/users",function(req,res){
    console.log("Hello");
    return res.send("hello apple");
})

app.get("/students",function(req,res){
    console.log("Hello");
    return res.send("hello bananas");
})

// const logger1= (req, res,next)=>{                   
//     console.log("before middleware logger1")  const first has  to initialize
//     next();
// }


function logger1(req, res,next){
    console.log("before middleware logger1")
    next();
    console.log("after middleware logger1")
}


function logger(req, res,next){
    console.log("before middleware logger")
    next();
    console.log("after middleware logger")
}


app.listen("3000",()=>{
    console.log("The port listen to 3000");
})