const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        min: 4
    },
    username: { 
        type: String,
        min: 3,
        max: 14
    },
    password: {
        type: String,
        min: 6,
        max: 1024
    },

    isAdmin: { type: Boolean },
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);