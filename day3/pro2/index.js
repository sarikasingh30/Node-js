const express=require("express");
const app=express();
app.use(singleBook);
app.get(`/book/:${name}`,function(req,res){
     return res.json({book_name: req.name});
})

app.get(`/book/:HarryPotter`,function(req,res){
    return res.json({book_name: req.name});
})
function singleBook(req,res,next){
    if(req.param.name=="GameofThones"){
        req.name="GameofThones"
    }
    else if(req.param.name=="HarryPotter"){
        req.name="HarryPotter"
    }
    next();
}
app.listen("3890",()=>{
    console.log("Listening to port 3890");
})
