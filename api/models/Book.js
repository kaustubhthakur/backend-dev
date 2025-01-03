const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    createAt: Date,
})
module.exports = mongoose.model("Book", BookSchema)