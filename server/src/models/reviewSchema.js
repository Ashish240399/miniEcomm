const mongoose=require("mongoose");
const reviewSchema=mongoose.Schema({
    review:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
});

const Review=mongoose.model("review",reviewSchema);
module.exports=Review;
