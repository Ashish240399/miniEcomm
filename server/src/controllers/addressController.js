const express=require("express");
const Address = require("../models/addressSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const address=await Address.create(req.body);
        return res.send(address)
    } catch (error) {
        return res.send(error);
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const address=await Address.find({userId:req.params.id}).lean().exec()
        return res.send(address)
    } catch (error) {
        return res.send(error);
    }
})
router.get("/",async(req,res)=>{
    try {
        const address=await Address.find().lean().exec()
        return res.send(address)
    } catch (error) {
        return res.send(error);
    }
})
module.exports=router;