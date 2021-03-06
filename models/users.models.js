const mongoose = require('mongoose');

const UsersSheme = mongoose.Schema({
    email: {
        type: String, 
        unique: true, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
});

module.exports = mongoose.model('Users', UsersSheme);