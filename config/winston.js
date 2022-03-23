const winston = require("winston")



const createLogger  = ()=>{




    return winston.createLogger({
        transports: [
            new winston.transports.Console({level:"info"}),
            new winston.transports.File({
                filename:"warn.log", level:"warn"
            })
        ]
    })

}

module.exports = {createLogger}