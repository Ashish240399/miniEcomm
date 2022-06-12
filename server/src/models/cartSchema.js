const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
    item:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Cart=mongoose.model("cart",cartSchema)
module.exports=Cart