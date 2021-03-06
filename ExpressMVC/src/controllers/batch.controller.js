const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const Batch=require("../models/batch.model");

router.get("/",async(req,res)=> {
    try {
        const batch=await Batch.find({}).lean().populate().exec();
        return res.status(200).send({batch});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
router.post("/",async(req,res)=> {
    try {
        const batch=await Batch.create(req.body);
        return res.status(200).send({batch});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router