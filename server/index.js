const express=require("express");
const app=express();
const cors=require("cors");
const userController=require("./src/controllers/usersController")
const productController=require("./src/controllers/productController")
const addressController=require("./src/controllers/addressController")
const brandController=require("./src/controllers/brandController")
const categoryController=require("./src/controllers/categoryController")
const wearController=require("./src/controllers/wearPositionController")
const typeController=require("./src/controllers/typeControlle")
const reviewController=require("./src/controllers/reviewController")
const cartController=require("./src/controllers/cartController")
const orderController=require("./src/controllers/orderController")
app.use(express.json());
app.use(cors());
app.use("/users",userController)
app.use("/products",productController)
app.use("/brand",brandController)
app.use("/address",addressController)
app.use("/category",categoryController)
app.use("/position",wearController);
app.use("/type",typeController);
app.use("/review",reviewController);
app.use("/cart",cartController);
app.use("/order",orderController)
module.exports=app;
