const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const Evaluation=require("../models/evaluation.model");

router.get("/",async(req,res)=> {
    try {
        const eval=await Evaluation.find({}).lean().populate().populate().exec();
        return res.status(200).send({eval});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
router.post("/",async(req,res)=> {
    try {
        const eval=await Evaluation.create(req.body);
        return res.status(200).send({eval});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router