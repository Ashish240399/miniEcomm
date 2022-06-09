const mongoose=require("mongoose");
const brandSchema=mongoose.Schema(
    {
        brand_name:{type:String,required:true,unique:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
);
const Brand=mongoose.model("brand",brandSchema)

module.exports=Brand;