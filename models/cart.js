const {Schema,model} = require("mongoose");

const cartSchema = Schema({
    timestamp:{
         type : Date, default: Date.now 
    },
    productos:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Producto"
        }],
        default: []
       
    },

})


module.exports = model("Cart", cartSchema)