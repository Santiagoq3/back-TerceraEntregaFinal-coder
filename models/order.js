const {Schema,model} = require("mongoose");

const orderSchema = Schema({
    timestamp:{
         type : Date, default: Date.now 
    },
    products:{
        type: Array,
        required: true
       
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ordernum:{
        type: Number,
        required: true,
        default: 1
    },
    status:{
        type: Boolean,
        default: true
    }
})


module.exports = model("Order", orderSchema)