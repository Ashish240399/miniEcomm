const express=require("express");
const Review = require("../models/reviewSchema");
const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        const review=await Review.create(req.body);
        return res.send(review)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const review=await Review.find().lean().exec();
        return res.send(review)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const review=await Review.findById(req.params.id).populate({path:"userId"}).lean().exec();
        return res.send(review)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/user/:userId",async(req,res)=>{
    try {
        const review=await Review.find({userId:req.params.userId});
        return res.send(review)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;