const express=require("express");
const Product = require("../models/productSchema");
const Type = require("../models/typeSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const type=await Type.create(req.body);
        return res.send(type)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const type=await Type.find().lean().exec();
        return res.send(type)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const type=await Type.findById(req.params.id).lean().exec();
        return res.send(type)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:id/product/:pro_id",async(req,res)=>{
    console.log("yes")
    try {
        const product=await Product.findById(req.params.pro_id).lean().exec();
        console.log(product)
        const type=await Type.updateOne({_id:req.params.id},{$push:{products:product}})
        return res.send(type)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;
