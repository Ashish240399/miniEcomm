const app = require("./index");
const connectDB = require("./src/config/db");

app.listen(5000,async(req,res)=>{
    try {
        await connectDB()
        console.log("Connected to 5000")
    } catch (error) {
        console.log(error)
    }
})