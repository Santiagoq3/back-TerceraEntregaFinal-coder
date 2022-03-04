const Product = require("../models/product")


const getProductByIdController = async(req,res)=>{

    const {id} = req.params

    const product = await Product.findById(id)
    .populate("user","name")


    if(!product){
        return res.status(200).json({
            msg: "El producto no fue encontrado",
            ok: false
        })
    }
    res.status(200).json({
        msg: "Producto encontrado correctamente",
        ok: true,
        product
        
    })
}

const getProductsController= async(req,res)=>{

    const products = await Product.find()
    .populate("user","name")

    

    const totalProducts = await Product.countDocuments()


    res.status(200).json({
        ok:true,
        msg: "Productos encontrado correctamente",
        products,
        totalProducts
    })

}

const createProductController = async(req,res)=>{

    const {name,description,...resto} = req.body

    if(!name || !description){
        return res.status(400).json({
            msg: "El nombre y la descripcion son obligatorios",
            ok: false
        })
    }

    const existProduct = await Product.findOne({name})

    if(existProduct){

       return res.status(400).json({
            msg: "el producto ya existe",
            ok: false
        })
    }

    const data = {
        ...resto,
        name,
        description
    }

    const product = new Product(data)

    await product.save()

    res.status(200).json({
        msg: "Producto creado correctamente",
        ok: true
    })
}


const deleteProductContrller = async(req,res)=>{

    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id,{status: false})


    res.status(200).json({
        msg: "Producto eliminado correctamente",
        ok: true
    })

}


const updateProductsController = async(req,res)=>{


    const {id} = req.params;

    const data = req.body;

    const product = await Product.findByIdAndUpdate(id,data)

    res.status(200).json({

        msg: "Producto actualizado correctamente",
        ok: true
    })
}



module.exports = {
    createProductController,
    deleteProductContrller,
    getProductByIdController,
    getProductsController,
    updateProductsController
}