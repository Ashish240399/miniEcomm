const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    brandId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brand",
        required:true
    },
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const Product=mongoose.model("product",productSchema);
module.exports=Product