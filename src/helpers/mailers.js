const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user : 'andikapwntr@gmail.com',
        pass : 'Andik@2094'
    },
    tls:{
        rejectUnauthorized:false
    }
})


module.exports= transporter