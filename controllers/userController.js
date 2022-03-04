const { json } = require("express")
const User = require("../models/user")
const bcrypt = require("bcrypt")

const getAllUsersController = async(req,res)=>{


    const users = await User.find()

    if(!users){
        return res.status(400).json({
            msg: "No hay usuarios existentes",
            ok: false,
            users
        })
    }

    res.status(200).json({
        users,
        msg: "Usuarios encontrados",
        ok: true
    })
}

const deleteUserController = async(req,res)=>{

    const {id} = req.params

    const user = await User.findByIdAndUpdate(id,{status:false});

    


    res.status(200).json({
        msg: "Usuario eliminado correctamente",
        ok:true,
        user
    })
}


const updateUserController = async(req,res)=>{

    const {id} = req.params

    const {password, ...resto} = req.body;

    if(password){

        const salt = bcrypt.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt)
    }


    await User.findByIdAndUpdate(id, resto)

    res.status(200).json({
        msg: "Usuario actualizado correctamente",
        ok: true,
    })
}



module.exports = {

    getAllUsersController,
    deleteUserController,
    updateUserController
}