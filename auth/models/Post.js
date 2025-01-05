const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

}, {
    timestamps: true,
})
module.exports = mongoose.model("Post", PostSchema);