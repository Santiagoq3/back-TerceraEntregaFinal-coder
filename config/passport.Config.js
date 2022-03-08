const passport = require("passport");
const local = require("passport-local");
const User = require("../models/user");
const bcrypt = require("bcrypt")



const LocalStrategy = local.Strategy
const initPassport= ()=>{

    passport.use("register", new LocalStrategy({
        passReqToCallback: true,
        usernameField: "email",
        session: false
    }, async(req,username,password,done)=>{
        const {name,email} = req.body;


        try {

            const data = {
                name,
                email,
                password
            }
        
            const user = new User(data)
        
        
            const salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(password,salt);

            const result = await user.save()

            return done(null,result);

        } catch (error) {
             console.log(error);
            return done(error);
        }
    }))

    passport.use('login',new LocalStrategy({usernameField:"email"},async(username,password,done)=>{
        try{
            // if(username===config.session.ADMIN&&password===config.session.PASSWORD){
            //     return done(null,{id:0,role:"admin"})
            // }
            const user = await User.findOne({email: username});
            console.log(user)
            if(!user) return done(null,false,{messages:"No se encontro el usuario"})

            const isValidPassword = bcrypt.compareSync(password,user.password)
            if(!isValidPassword) return done(null,false,{messages:"La contraseña es incorrecta"})
            return done(null,user);
        }catch(error){
            return done(error);
        }
    }))



}


module.exports = initPassport