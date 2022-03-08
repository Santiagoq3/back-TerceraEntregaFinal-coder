const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = async(req,res)=>{

    // const {name,email,password} = req.body;


    // if(!name || !email || !password){
    //     return res.status(400).json({
    //         msg: "El nombre, email y contraseña son obligatorios",
    //         ok: false
    //     })
    // }

    // const data = {
    //     name,
    //     email,
    //     password
    // }

    // const user = new User(data)


    // const salt = bcrypt.genSaltSync(10);
    // user.password = bcrypt.hashSync(password,salt);

    
    // await user.save()


    res.status(200).json({
        msg: "Usuario creado correctamente",
        ok: true
    })



  
}


const loginUser = async(req,res)=>{

    const {name,email,status,role,_id} = req.user
    const payload = {
        name,
        email,
        status,
        role,
        _id
    }
    jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
        expiresIn: "1h"
    }, (err, token)=>{

        if(err){
            console.log(err)
            return res.status(400).json({
                msg: "no pudo verificarse",
                ok: false
            })
        }else{

          return  res.status(200).json({
                msg: "Usuario Logueado",
                ok: true,
                token
            })
        }

    })

   
   
}



module.exports = {

    createUser,
    loginUser,
}