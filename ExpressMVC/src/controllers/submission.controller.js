const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const Submission=require("../models/submission.model");

router.get("/:id",async(req,res)=> {
    try {
        const users=await Submission.findById({evaluationId:req.params.id}).lean().populate("studentId").exec();
        return res.status(200).send({users});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
router.get("/max",async(req,res)=> {
    try {
        const submissions=await Submission.find({}).sort({ marks: -1 }).limit(1);lean().populate().populate().exec();
        return res.status(200).send({submissions});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.post("/",async(req,res)=> {
    try {
        const sub=await Submission.create(req.body);
        return res.status(200).send({sub});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router