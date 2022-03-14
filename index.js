const express = require('express')
const port = process.env.PORT || 2030
const app= express()
const mongoose = require('mongoose')
require('dotenv').config();
const myRoute = require('./router/router')

const url = process.env.CLOUDDB


mongoose.connect(url).then(()=>{
    console.log('connected successfully....')
}).catch((error)=>{
    console.log(error.essage)
})


app.use(express.json())
app.use('/api', myRoute)

app.listen(port, ()=>{
    console.log('listening to port' + port)
})