const mongoose=require("mongoose");
const connectDB=()=>{
    mongoose.connect("mongodb+srv://Ashish7797:Ashish7797@cluster0.pgk2o.mongodb.net/rozer?retryWrites=true&w=majority")
}

module.exports=connectDB;