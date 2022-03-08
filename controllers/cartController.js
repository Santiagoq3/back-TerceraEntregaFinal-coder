const Cart = require("../models/cart")



const addProductCartController = (req,res)=>{

    const params = {}
    const cart = 
    res.status(200).json({
        msg: "Producto agregado al carrito",
        ok: true
    })
}


const createCartController = async(req,res)=>{

    const {id} = req.params

    data = {
        timestamp: Date.now(),
        products: [],
        user: id
    }

    const existCart = await Cart.findOne({user: id})
    if(existCart){
        return res.json({
            msg: "ya existe el carrito"
        })
    }

    
    const cart = new Cart(data)


    await cart.save()


    res.status(200).json({
        msg: "Carrito creado",
        ok: true,
        cart
    })
}


const deleteProductsCartController = async(req,res)=>{


    res.status(200).json({
        msg: "Carrito vaciado correctamente",
        ok: true
    })
}



module.exports = {
    addProductCartController,
    createCartController,
    deleteProductsCartController
}