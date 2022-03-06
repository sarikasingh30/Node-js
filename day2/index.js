const express=require("express");
const app=express();
app.get("/home",function(req,res){
    res.send("Hello")
});

app.get("/book", function(req,res){
    res.json([{"Ikkigai":"A Japanese Book by Kaira Mikki"},
{"Power of Subconcious Mind":" A Book by Dr. Joseph Merfi"},
{"Magic of Thinking Rich":"A Book by David J Swartz"},
{"Power":"A Book by Raunda Bern"}]);
});


app.listen("4000",()=>{
    console.log("port is 4000");
})