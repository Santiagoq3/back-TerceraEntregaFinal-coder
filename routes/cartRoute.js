
const express = require("express");
const { addProductCartController, createCartController, deleteProductsCartController } = require("../controllers/cartController");


const cartRoute = express.Router();


cartRoute.post("/addproduct", addProductCartController)

cartRoute.post("/createcart/:id", createCartController)


cartRoute.delete("/deleteproductscart", deleteProductsCartController)



// cartRoute.post("/login", loginUser)

// cartRoute.post("/logout", logoutUser)




module.exports = cartRoute