const express=require("express");
const Order = require("../models/orderSchema");
const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        const order=await Order.create(req.body);
        return res.send(order);
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const order=await Order.find().lean().exec();
        return res.send(order);
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const order=await Order.findById(req.params.id).lean().exec();
        return res.send(order);
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;