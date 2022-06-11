const express=require("express");
const Product = require("../models/productSchema");
const Type = require("../models/typeSchema");
const Wear = require("../models/wearPositionSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const wear_part=await Wear.create(req.body);
        return res.send(wear_part)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const wear_part=await Wear.find().lean().exec();
        return res.send(wear_part)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:id/type/:type_id",async(req,res)=>{
    try {
        const type=await Type.findById(req.params.type_id).lean().exec();
        const wear_part=await Wear.updateOne({_id:req.params.id},{$push:{type:type}})
        return res.send(wear_part)
    } catch (error) {
        
    }
})
module.exports=router;