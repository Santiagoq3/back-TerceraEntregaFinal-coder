
const express = require("express");
const { createUser, loginUser, logoutUser } = require("../controllers/authController");
const { passportAuth } = require("../middlewares/auth");


const authRoute = express.Router();


authRoute.post("/register",passportAuth("register"), createUser)

authRoute.post("/login", passportAuth("login"),loginUser)





module.exports = authRoute