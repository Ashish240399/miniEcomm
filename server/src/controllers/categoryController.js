const express=require("express");
const Category = require("../models/categorySchema");
const Product = require("../models/productSchema");
const Wear = require("../models/wearPositionSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const category=await Category.create(req.body);
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
        const category=await Category.findById(req.params.id).aggregate({$match:"62a44b9e8f0a47ebe336d60e"}).lean().exec();
        return res.send(category)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:category_id/position/:position_id",async(req,res)=>{
    try {
        const position=await Wear.findById(req.params.position_id).lean().exec();
        const category=await Category.updateOne({_id:req.params.category_id},{$push:{wear_part:position}});
        return res.send(category)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;