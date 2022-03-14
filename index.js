const express = require('express')
const port = process.env.PORT || 2030
const app= express()
const mongoose = require('mongoose')
require('dotenv').config();
const myRoute = require('./router/router')

const url = 'mongodb+srv://upredictable_22:upredictable_22@cluster0.z1t9a.mongodb.net/schoolData'


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