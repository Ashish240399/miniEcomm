const mongoose=require("mongoose");
const categorySchema=mongoose.Schema({
    brand_name:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Category=mongoose.model("category",categorySchema);
module.exports=Category;