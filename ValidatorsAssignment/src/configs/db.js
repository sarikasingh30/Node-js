const mongoose=require("mongoose");
const connection=()=>{
    return mongoose.connect("mongodb+srv://sarika:12345@cluster0.3bl32.mongodb.net/Cluster0?retryWrites=true&w=majority");

}
module.exports=connection;