const express=require("express");
const { body, validationResult } = require('express-validator');
const { is } = require("express/lib/request");
const router=express.Router();
const mongoose=require("mongoose");
const User=require("../models/user.model");
router.post("/",
            body("firstName").not().isEmpty().withMessage("FirstName is must"),
            body("email").isEmail().withMessage("Email is required"), //,..............to warn tthem email is must

            // CUSTOM VALIDATOR FOR UNIQUE EMAIL..................................................
            // body("email").isEmail().custom( async(value)=>{
            //     const user=await User.findOne({email:value});  
            //     if(user){
            //         throw new Error("Email already there");
            //     }
            //     return true;
            // }),
            // .....................................................................................

            body("pincode").not().isEmpty().isLength({min:6,max:6}).withMessage("Please Enter six digits"),
            body("age").not().isEmpty().isNumeric().withMessage("It is required").custom((value)=>{
                if(value<1||value>100){
                    throw new Error("Invalid Age , it must be b/w 1 and 100");
                }
                return true;
            }),
            body("gender").not().isEmpty().withMessage("It is must").custom((value)=>{
                if(value!=="Male"||value!=="Female"||value!="Others"){
                    throw new Error("Please Choose among Male,Female and Others");
                }
                return true;
            }),
          
            async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
    }

        const user=await User.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});
module.exports=router;