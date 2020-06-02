const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    title: {
       type: String,
       required: true
    },
    price: {
       type: String,
       required: true,
    },      
    city: {
       type: String,
       required: true,
    },
    state: {
       type: String,
       required: true,
    },
    description: {
        type: String,
    },
    imgUrl: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = mongoose.model('Room', roomSchema)
