const mongoose = require('mongoose')

const tasksDoneSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    }
}, {
    timestamps: false,
})

module.exports = mongoose.model('TasksDone', tasksDoneSchema)