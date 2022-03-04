const User = require("../models/user")
const bcrypt = require("bcrypt")

const createUser = async(req,res)=>{

    const {name,email,password} = req.body;


    if(!name || !email || !password){
        return res.status(400).json({
            msg: "El nombre, email y contraseña son obligatorios",
            ok: false
        })
    }

    const data = {
        name,
        email,
        password
    }

    const user = new User(data)


    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password,salt);


    await user.save()


    res.status(200).json({
        msg: "Usuario creado correctamente",
        ok: true
    })



  
}


const loginUser = async(req,res)=>{

    const {email,password} = req.body;


    if(!email || !password){
        return res.status(400).json({
            msg: "El email y contraseña son obligatorios",
            ok: false
        })
    }

    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({
            msg: "Usuario no existe",
            ok: false
        })
    }

    if(!user.status){
        return res.status(400).json({
            msg: "El usuario esta desactivado o eliminado",
            ok: false
        })
    }

    const validPassword = bcrypt.compareSync(password,user.password)

    if(!validPassword){
        return res.status(400).json({
            msg: "La contraseña no es correcta",
            ok: false
        })
    }


    res.status(200).json({
        msg: "Usuario Logueado",
        ok: true,
        user
    })
   
}

const logoutUser = (req,res)=>{


    res.status(200).json({
        msg: "logout"
    })
}


module.exports = {

    createUser,
    loginUser,
    logoutUser
}