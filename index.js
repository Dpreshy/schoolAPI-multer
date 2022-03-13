const express = require('express')
const port = 2030
const app= express()
const mongoose = require('mongoose')
const myRoute = require('./router/router')

const url = 'mongodb://localhost/StudentDb'


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