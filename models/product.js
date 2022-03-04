const {Schema, model} = require("mongoose");

const productSchema = Schema({
    name:{
        type: String,
        required: [true,"el nombre es obligatorio"]
    },
    status :{
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price:{
        type: Number,
        default: 0
    },
    description: {type: String,
    required: true},
    stock:{
        type: Number,
        default: 20
    },
    img: {type: String},
    timestamp:{
        type : Date, default: Date.now 
   }
})


module.exports = model("Product", productSchema)