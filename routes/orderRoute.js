


const express = require("express");

const { createOrder, deleteOrder,getOrder,getOrders } = require("../controllers/orderController");


const orderRoute = express.Router();


orderRoute.post("/create-order/:userId", createOrder)

orderRoute.get("/get-order/:id", getOrder)

orderRoute.get("/get-orders",getOrders)

orderRoute.delete("/delete-order/:id", deleteOrder)



module.exports = orderRoute