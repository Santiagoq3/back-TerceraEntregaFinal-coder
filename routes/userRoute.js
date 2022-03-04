const express = require("express");
const { getAllUsersController, deleteUserController, updateUserController } = require("../controllers/userController");


const userRoute = express.Router();


userRoute.get("/users", getAllUsersController)

userRoute.delete("/users/:id", deleteUserController)

userRoute.put("/users/:id", updateUserController)



module.exports = userRoute