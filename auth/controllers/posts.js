const cloudinary = require('../helper/cloudinary')
const Post = require('../models/Post')
const uploadToCloudinary = async (filepath) => {
    try {
        const res = await cloudinary.uploader.upload(filepath);
        return {
            url: res.secure_url,
            publicId: res.public_id,
        }
    } catch (error) {
        console.error(error);
    }
}