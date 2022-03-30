const mongoose=require("mongoose");
const submissionSchema=new mongoose.Schema({
    EvaluationId:{type:mongoose.Schema.Types.ObjectId,
        ref:"eval",required:true},
    studentId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    marks:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true,
});

const Submission=mongoose.model("submission",submissionSchema);
module.exports=Submission;