const Order = require("../models/order")


 const createOrder = async(req,res)=>{


    const {userId} = req.params
    const {products} = req.body
    console.log(products,userId)
    const data = {
        user: userId,
        products
    }
    const order = new Order(data)


    const result = await order.save()


    res.status(200).json({
        msg:"Orden realizado correctamente",
        ok: true,
        result

    })

}



 const getOrder =async (req,res)=>{

    const {id} = req.params


    const orders = await Order.find({_id: id})


    res.status(200).json({
        msg: "Ordenes",
        ok: true,
        orders
    })
}

 const getOrders = async()=>{



    const orders = await Order.find()


    res.status(200).json({
        msg: "Ordenes",
        ok: true,
        orders
    })

}


 const deleteOrder = async(req,res)=>{

    const {id} = req.params


    await Order.findByIdAndUpdate(id,{status: false})



    res.status(200).json({
        msg: "orden eliminada del historial",
        ok: true
    })
}


module.exports = {
    createOrder,
    deleteOrder,
    getOrder,
    getOrders
}