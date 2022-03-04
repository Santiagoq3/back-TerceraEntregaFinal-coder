
const express = require("express");
const { createUser, loginUser, logoutUser } = require("../controllers/authController");
const { passportAuth } = require("../middlewares/auth");


const authRoute = express.Router();


authRoute.post("/register",passportAuth("register"), createUser)

authRoute.post("/login", passportAuth("login"),loginUser)

authRoute.post("/logout", logoutUser)




module.exports = authRoute