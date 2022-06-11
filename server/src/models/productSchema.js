const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    brandId:{type:mongoose.Schema.Types.ObjectId,ref:"brand",required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true},
    positionId:{type:mongoose.Schema.Types.ObjectId,ref:"wear",required:true},
    typeId:{type:mongoose.Schema.Types.ObjectId,ref:"type",required:true},
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"review",required:false}]
},{
    versionKey:false,
    timestamps:true
})

const Product=mongoose.model("product",productSchema);
module.exports=Product