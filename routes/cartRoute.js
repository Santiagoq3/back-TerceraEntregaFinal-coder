
const express = require("express");
const { addProductCartController } = require("../controllers/cartController");


const cartRoute = express.Router();


cartRoute.post("/addProduct", addProductCartController)

// cartRoute.post("/login", loginUser)

// cartRoute.post("/logout", logoutUser)




module.exports = cartRoute