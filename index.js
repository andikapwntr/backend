const express = require('express')
const app = express()
const PORT=5000
const bodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')


require('dotenv').config()



app.use(cors()) 
app.use(bearerToken())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false})) 
app.use(express.static('public'))

const {db} = require('./src/connections')
const {transporter} = require('./src/helpers')
const { sendMail } = require('./src/helpers/mailers')

app.get('/',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.query)

})

app.get('/sendMessage',(req,res)=>{
    transporter:sendMail({
        from :"FreshMarket <andikapwntr@gmail.com>",
        to:'dinotestes12@gmail.com',
        subject: 'Hai konfirm dulu dong',
        html:`<h1>Subscibe</h1>`

    })
    .then(()=>{
        res.send('berhasil')

    })
    .catch((err)=>{
        console.log(err)
        
    })
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT,()=>{
    console.log(`jalan di port ${PORT}`)
})