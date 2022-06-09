const mongoose=require("mongoose");
const addressSchema=mongoose.Schema({
    location:{type:String,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Address=mongoose.model("address",addressSchema);
module.exports=Address;