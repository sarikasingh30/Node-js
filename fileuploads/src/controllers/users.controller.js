// const path=require("path");
const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const User=require("../models/users.model");
const uploads=require("../middlewares/uploads");

router.get("/", async(req,res)=>{
    try {
        const users=await User.find().lean().exec();
        return res.status(201).send(users);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});


router.post("/",uploads.single("profilePic"), async(req,res)=>{
    try {
        // console.log(req.body);
        // console.log(req.file);
        const user =await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            age:req.body.age,
            profilePic:req.file.path,
        });

        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

router.post("/multiple",uploads.any("profilePic",5), async(req,res)=>{
    try {
        const filePaths=req.files.map((file)=>{
            console.log({file})
            return file.path
        });
        console.log(filePaths);

        const user=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            age:req.body.age,
            profilePic:filePaths,
        })

        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});
module.exports=router;
