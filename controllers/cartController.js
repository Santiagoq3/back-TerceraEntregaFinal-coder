


const addProductCartController = (req,res)=>{


    res.status(200).json({
        msg: "Producto agregado al carrito",
        ok: true
    })
}


const createCartController = (req,res)=>{

    

    res.status(200).json({
        msg: "Carrito creado",
        ok: true
    })
}


module.exports = {
    addProductCartController
}