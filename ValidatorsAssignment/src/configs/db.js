const mongoose=require("mongoose");
const connection=()=>{
    return mongoose.connect("mongodb+srv://sarika:12345@cluster0.3bl32.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-6x18cj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");

}
module.exports=connection;