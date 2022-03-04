const mongoose = require("mongoose")

const {Schema,model} = mongoose

const userSchema = Schema({
    name: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "el correo es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "la contrasela es obligatoria"]
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        emun: ["ADMIN_ROLE","USER_ROLE"],
        default: "ADMIN_ROLE"
    },
    status:{
        type: Boolean,
        default: true
    }
});



module.exports = model('User', userSchema);