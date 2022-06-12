const express=require("express");
const Address = require("../models/addressSchema");
const Cart = require("../models/cartSchema");
const Product = require("../models/productSchema");
const User = require("../models/userSchema");
const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(404).send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const user=await User.find({}).populate({path:"address"}).lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const user=await User.findById(req.params.id).populate({path:"address cart_item",populate:{path:"item"}}).lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/:id/address/:add_id",async(req,res)=>{
    try {
        const addressOne=await Address.findById(req.params.add_id).lean().exec()
        console.log(addressOne)
        const user=await User.updateOne({_id:req.params.id},{$push:{address:addressOne}})
        console.log(user)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/:id/add_to_cart/:cart_id",async(req,res)=>{
    try {
        const cart=await Cart.findById(req.params.cart_id)
        const user=await User.updateOne({_id:req.params.id},{$push:{cart_item:cart}});
        console.log(user)
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:id/delete/:product_id",async(req,res)=>{
    try {
        const product=req.params.product_id
        const user=await User.updateOne({_id:req.params.id},{$pull:{cart_item:req.params.product_id}})
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
})
router.patch("/:id/address/idx/edit",async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=router;