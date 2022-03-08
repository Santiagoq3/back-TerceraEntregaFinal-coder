const {Schema,model} = require("mongoose");

const cartSchema = Schema({
    timestamp:{
         type : Date, default: Date.now 
    },
    products:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        default: []
       
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

})


module.exports = model("Cart", cartSchema)