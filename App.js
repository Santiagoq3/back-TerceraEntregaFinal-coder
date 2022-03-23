const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const mongoose = require("mongoose")
const cors = require("cors");
const passport = require("passport")

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const initPassport = require("./config/passport.Config");
const orderRoute = require("./routes/orderRoute");
const { createLogger } = require("./config/winston");

const logger = createLogger()

const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
initPassport()
app.use(passport.initialize())



// Routes

app.use("/user",userRoute)
app.use("/auth",authRoute)
app.use("/product",productRoute)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)

app.get("/", (req,res)=>{

    res.json({
        msg: "que onda pa"
    })
})


try {
    
    mongoose.connect(process.env.MONGODB_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })


    logger.info("Conectado a la base de datos")
} catch (error) {
    logger.warn("No se puedo conectar a la base de datos")

    logger.warn(error)
    process.exit()
}

app.listen(process.env.PORT,()=>{
    logger.info(`conectado al puerto ${process.env.PORT}`)
})