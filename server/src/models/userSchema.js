const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:[{type:mongoose.Schema.Types.ObjectId,ref:"address",required:false}],
    cart_item:[{type:mongoose.Schema.Types.ObjectId,ref:"cart",required:false}],
    ordered_item:[String],
},{
    versionKey:false,
    timestamps:true
})
const User=mongoose.model("user",userSchema);
module.exports=User