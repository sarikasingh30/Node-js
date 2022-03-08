const express=require("express");
const app=express();
app.use(allBooks);

app.get("/books",function(req,res){
    return res.send("Hello")
})

function allBooks(req,res,next){
    console.log("Fetching All The books");
    next();
}

app.listen("4500", ()=>{
    console.log("port 4500");
})