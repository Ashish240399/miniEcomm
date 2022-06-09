const express=require("express");
const Category = require("../models/categorySchema");
const Product = require("../models/productSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const category=await Category.create(req.body);
        console.log(category)
        return res.send(category)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const category=await Category.find().lean().exec();
        return res.send(category)
    } catch (error) {
        return res.send(error);
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const category=await Category.findById(req.params.id).lean().exec()
        return res.send(category)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:category_id/product/:product_id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.product_id).lean().exec();
        const category=await Category.updateOne({_id:req.params.category_id},{$push:{products:product}});
        return res.send(category)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;