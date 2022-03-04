
const express = require("express");
const { addProductCartController, createCartController, deleteProductsCartController } = require("../controllers/cartController");


const cartRoute = express.Router();


cartRoute.post("/addProduct", addProductCartController)

cartRoute.post("/createCart", createCartController)


cartRoute.delete("/deleteProductsCart", deleteProductsCartController)



// cartRoute.post("/login", loginUser)

// cartRoute.post("/logout", logoutUser)




module.exports = cartRoute