const mongoose=require("mongoose");
const evalSchema=new mongoose.Schema({
    dateOfEval:{type:String,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true},
    batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true}
},{
    versionKey:false,
    timestamps:true,
});

const Eval=mongoose.model("eval",evalSchema);
module.exports=Eval;