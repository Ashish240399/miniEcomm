const mongoose=require("mongoose");
const typeSchema=mongoose.Schema({
    type_name:{type:String,unique:true,required:true},
    // positionId:{type:mongoose.Schema.Types.ObjectId,ref:"wear",required:true},
    // products:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}]
},{
    versionKey:false,
    timestamps:true
})

const Type=mongoose.model("type",typeSchema);
module.exports=Type;
