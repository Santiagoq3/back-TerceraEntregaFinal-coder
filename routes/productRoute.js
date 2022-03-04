const express = require("express");
const { createProductController, getProductByIdController, getProductsController, updateProductsController, deleteProductContrller } = require("../controllers/productController");



const productRoute = express.Router();


productRoute.get("/product/:id", getProductByIdController)

productRoute.get("/products", getProductsController)

productRoute.post("/createProduct", createProductController)

productRoute.delete("/deleteProduct/:id", deleteProductContrller)


productRoute.put("/updateProduct/:id", updateProductsController)




module.exports = productRoute