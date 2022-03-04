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

    data = {
        timestamp: Date.now(),
        products: []

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