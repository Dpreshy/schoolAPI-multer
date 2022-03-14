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


//to get all school info
const getAll = async(req, res)=>{
    try {
        const all = await studentModel.find()
        res.status(200).json({
            success: 'successful' ,
             data:{all
            }
        })
        
    } catch (error) {
        console.log(error.message)
    }
}


//to get school info by id
const getById = async (req, res)=>{
    try{
        const getId = await studentModel.findById(req.params.id)

        res.status(200).json({
            success: 'successful' ,
            data:{
                getId
            }
        })
    }catch (error){
        console.log(error.message)
    }
}


//to update our school DB
const updateOne = async (req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)

        const solve = await studentModel.findByIdAndUpdate(req.params.id, ({
            name: req.body.name,
            location: req.body.location,
            image: req.file.path,
            cloud_url: result.secure_url,
            cloud_id: result.public_id
            
        }), {new: true})
        res.status(200).json({
            sucess: 'successful', 
            data:{solve}
        })
    }catch(error){
        console.log(error.message)
    }
}

//to delete 
const deleteOne = async (req, res)=>{
    try{
        const id = req.params.id
        const stud = await studentModel.findById(id)
         await cloudinary.uploader.destroy(stud.cloud_id)
         await fs.unlinkSync(stud.image)
         const deleting = await studentModel.findByIdAndDelete(id)
         res.status(200).json ({
             success: 'successful' ,
             data: 'deleted'
         })
    }catch(error){
        console.log(error.message)
    }
}


module.exports = {
    createStudent,
    getAll,
    getById,
    updateOne,
    deleteOne
}