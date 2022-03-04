
const express = require("express");
const { createUser, loginUser, logoutUser } = require("../controllers/authController");


const authRoute = express.Router();


authRoute.post("/register", createUser)

authRoute.post("/login", loginUser)

authRoute.post("/logout", logoutUser)




module.exports = authRoute