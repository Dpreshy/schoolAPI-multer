const mongoose = require ('mongoose')


const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    createAt: {
        type: Date,
        default: new Date()
    },

    cloud_id: {
        type: String
    },

    cloud_url: {
        type: String
    },

    image: {
        type: String,
        
    }
})

module.exports = mongoose.model('schooldatas', studentSchema)