const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const Student=require("../models/student.model");

router.get("/",async(req,res)=> {
    try {
        const stu=await Student.find({}).lean().populate().exec();
        return res.status(200).send({stu});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
router.post("/",async(req,res)=> {
    try {
        const stu=await Student.create(req.body);
        return res.status(200).send({stu});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router