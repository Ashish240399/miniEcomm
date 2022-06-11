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

module.exports=router;