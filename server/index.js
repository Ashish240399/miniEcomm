const express=require("express");
const app=express();
const cors=require("cors");
const userController=require("./src/controllers/usersController")
const productController=require("./src/controllers/productController")
const addressController=require("./src/controllers/addressController")
const brandController=require("./src/controllers/brandController")
app.use(express.json());
app.use(cors());
app.use("/users",userController)
app.use("/products",productController)
app.use("/brand",brandController)
app.use("/address",addressController)
module.exports=app;