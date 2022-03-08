const passport = require("passport")


const passportAuth = (strategy)=>{
    return async(req,res,next) =>{
        passport.authenticate(strategy,function(err,user,info){
            if(err) return next(err);
            if(!user) return res.json({msg: info});
            req.user = user;
            next();
        })(req,res,next);
    }
}



module.exports = {

    passportAuth
}