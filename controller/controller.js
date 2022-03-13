const studentModel = require ('../model/model')

const cloudinary = require('../multer/cloudinary')
const  fs = require('fs')


//to create new students
const createStudent = async (req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const newStudent = await studentModel.create({

            name: req.body.name,
            location: req.body.location,
            image: req.file.path,
            cloud_url: result.secure_url,
            cloud_id: result.public_id
        })
        console.log(result)

         res.status(201).json({
            status: 'success',
            data:  newStudent
               
        })
    } catch (error){
        res.status(404).json({
            status: 'fail',
            message: error.message
        })

    }
}





module.exports = {
    createStudent,
}