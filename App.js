const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
dotenv.config()

const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



// Routes

app.use("/user",userRoute)
app.use("/auth",authRoute)
app.use("/product",productRoute)
app.use("/cart",cartRoute)

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


    console.log("conectado a mongodb")
} catch (error) {
    console.log("Error, no se puedo conectar a la base de datos");
    console.log(error);
    process.exit()
}

app.listen(process.env.PORT,()=>{
    console.log("Puerto conectado en " + process.env.PORT)
})