const mongoose=require("mongoose");
const categorySchema=mongoose.Schema(
    {
        category_name:{type:String,required:true,unique:true},
        products:[{type:mongoose.Schema.Types.ObjectId,required:false}]
    },{
        versionKey:false
    }
)
const Category=mongoose.model("category",categorySchema);
module.exports=Category