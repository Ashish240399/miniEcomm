const mongoose=require("mongoose");
const wearPostion=mongoose.Schema({
    //category:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true},
    wear_part:{type:String,required:true,unique:true},
    //type:[{type:mongoose.Schema.Types.ObjectId,ref:"type",required:false}],
    // products:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:false}]
},{
    versionKey:false,
    timestamps:true
})

const Wear=mongoose.model("wear",wearPostion);
module.exports=Wear;