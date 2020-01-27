const mongoose = require('mongoose')

var studentSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number
});

module.exports = mongoose.model('Student', studentSchema);
