const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min:3
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'user',
        enum: ['user','admin']
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;

