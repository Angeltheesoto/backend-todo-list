//require mongoose
const mongoose = require('mongoose')
//todoliste schema
const TodoSchema = new  mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    done:{
        type: Boolean,
        required: true
    }
})
 
module.exports = mongoose.model('todos', TodoSchema)