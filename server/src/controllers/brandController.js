const express=require("express");
const Brand = require("../models/brandSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const brand=await Brand.create(req.body);
        return res.send(brand)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const brand=await Brand.find().lean().exec();
        return res.send(brand);
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router