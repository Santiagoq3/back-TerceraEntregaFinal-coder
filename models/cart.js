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

})


module.exports = model("Cart", cartSchema)