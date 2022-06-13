const express=require("express");
const Cart = require("../models/cartSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const cart=await Cart.create(req.body)
        return res.send(cart)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const cart=await Cart.findById(req.params.id).populate({path:"item"}).lean().exec()
        return res.send(cart)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/userId/:user_id",async(req,res)=>{
    try {
        const cart=await Cart.find({userId:req.params.user_id});
        return res.send(cart)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const cart=await Cart.find().populate({path:"item"}).lean().exec();
        return res.send(cart)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router