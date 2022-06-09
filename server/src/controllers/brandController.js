const express=require("express");
const Brand = require("../models/brandSchema");
const Product = require("../models/productSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const brand=await Brand.create(req.body);
        console.log(brand)
        return res.send(brand);
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
router.get("/:id",async(req,res)=>{
    try {
        const brand=await Brand.findById(req.params.id).lean().exec();
        return res.send(brand);
    } catch (error) {
        return res.send(error)
    }
})

router.post("/:brand_id/product/:product_id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.product_id).lean().exec();
        console.log(product)
        const brand=await Brand.updateOne({_id:req.params.brand_id},{$push:{products:product}})
        console.log(brand);
        return res.send(brand)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router