const mongoose = require('mongoose')

const collSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    created_at: {
        type:  Date,
        default: Date.now()
    }
})

const userModel = mongoose.model('user', collSchema)
module.exports = userModel