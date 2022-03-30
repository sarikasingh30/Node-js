const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const User=require("../models/user.model");

router.get("",async(req,res)=> {
    try {
        const user=await User.find({}).lean().populate().populate().exec();
        return res.status(200).send({user});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
router.post("",async(req,res)=> {
    try {
        const user=await User.create(req.body);
        return res.status(200).send({user});
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router