const express=require("express");
const Address = require("../models/addressSchema");
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
        const user=await User.findById(req.params.id).populate({path:"address"}).lean().exec();
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
router.patch("/:id/cart/:product_id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.product_id);
        console.log(product)
        const user=await User.updateOne({_id:req.params.id},{$push:{cart_item:product}});
        console.log(user)
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