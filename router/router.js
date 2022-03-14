const express = require ('express')

const route = express.Router()

const {createStudent, getAll, getById, updateOne, deleteOne} = require ('../controller/controller')
const uploadImage = require('../multer/multer')

//to create school data
route.post('/create', uploadImage, createStudent)

//to get all school data
route.get('/all', getAll)


//to get school by id
route.get('/all/:id', getById)

// to update an id
route.patch('/all/:id', uploadImage, updateOne)

//to delete 
route.delete('/all/:id',deleteOne)




module.exports = route