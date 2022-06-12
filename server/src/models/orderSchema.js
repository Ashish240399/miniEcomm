const mongoose=require("mongoose");
const orderSchema=mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    address_line1:{type:String,required:true},
    address_line2:{type:String,required:false},
    district:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
    orderStatus:{type:Boolean,required:false,default:false}
},{
    versionKey:false,
    timestamps:true
})

const Order=mongoose.model("order",orderSchema);
module.exports=Order;