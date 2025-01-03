const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("User", UserSchema)