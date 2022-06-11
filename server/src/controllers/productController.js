const express=require("express");
const Category = require("../models/categorySchema");
const { findById } = require("../models/productSchema");
const router=express.Router();
const Product=require("../models/productSchema");
const Type = require("../models/typeSchema");
const Wear = require("../models/wearPositionSchema");
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
router.get("/:id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/category/:category_id",async(req,res)=>{
    try {
        const category=await Category.findById(req.params.category_id);
        console.log(category)
        const product=await Product.find({categoryId:req.params.category_id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/wear/:wear_id",async(req,res)=>{
    try {
        const wear=await Wear.findById(req.params.wear_id);
        console.log(wear)
        const product=await Product.find({positionId:wear._id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/type/:type_id",async(req,res)=>{
    try {
        const type=await Type.findById(req.params.type_id);
        console.log(type)
        const product=await Product.find({typeId:type._id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/category/:category_id/wear/:wear_id/type/:type_id",async(req,res)=>{
    try {
        const type=await Type.findById(req.params.type_id);
        console.log(type)
        const product=await Product.find({typeId:type._id,categoryId:req.params.category_id,positionId:req.params.wear_id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/category/:category_id/type/:type_id",async(req,res)=>{
    try {
        const product=await Product.find({typeId:req.params.type_id,categoryId:req.params.category_id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/category/:category_id/wear/:wear_id",async(req,res)=>{
    try {
        const product=await Product.find({positionId:req.params.wear_id,categoryId:req.params.category_id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/wear/:wear_id/type/:type_id",async(req,res)=>{
    try {
        const type=await Type.findById(req.params.type_id);
        console.log(type)
        const product=await Product.find({typeId:type._id,positionId:req.params.wear_id}).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/:id/review/rev_id",async(req,res)=>{
    try {
        const product=await Product.updateOne({_id:req.params.id},{reviews:req.params.rev_id});
        return res.send(product)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router