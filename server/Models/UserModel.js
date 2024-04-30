const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true, unique: true },

}, {
    timestamps: true
})

const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel;