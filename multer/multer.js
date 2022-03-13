const multer = require ('multer')
const path = require ('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb ) =>{
        cb(null, file.originalname)
    }
})

const  fileFilter = (req, file, cb)=>{
    const eXT = path .extname(file.originalname)
    if(eXT === '.png' || eXT === '.jpg' || eXT === '.jpeg'){
        cb(null, true)
    }else{
        cb(null, 'invalid')
    }
}

const uploadImage = multer ({
    storage: storage,
    fileFilter: fileFilter,
    filesize:{
        limits: 1024*1024*10
    }                                                                                 

}).single('image')

module.exports = uploadImage