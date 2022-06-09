const express=require("express");
const router=express.Router();
const Product=require("../models/productSchema")
router.post("/",async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(404).send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const product=await Product.find({}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=router
