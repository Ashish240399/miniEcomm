const mongoose=require("mongoose");
const categorySchema=mongoose.Schema(
    {
        category_name:{type:String,required:true,unique:true},
        // products:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:false}],
        //position:[{type:mongoose.Schema.ObjectId,ref:"wear",required:false}]
    },{
        versionKey:false
    }
)
const Category=mongoose.model("category",categorySchema);
module.exports=Category