const mongoose = require('mongoose');

// building the schema
const goalsSchema = mongoose.Schema({
    goalTitle : {
        type : String,
        required : [true, 'Please enter a goal title']
    },
    goalDescription : String,
    goalCompletion : Boolean
}, {
    timestamps : true
})

module.exports = mongoose.model('Goal', goalsSchema)