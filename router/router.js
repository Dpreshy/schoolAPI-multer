const express = require ('express')

const route = express.Router()

const {createStudent} = require ('../controller/controller')
const uploadImage = require('../multer/multer')

//to create student data
route.post('/create', uploadImage, createStudent)



module.exports = route