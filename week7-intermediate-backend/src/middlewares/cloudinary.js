const { response } = require('../helper/common')
const createError = require('http-errors');
const cloudinary = require("../configs/cloudinary");

const uploadCloudinary = async (req, res, next) => {
    try {
        if (!req.file) {
            return next(createError(400, "No file uploaded"));
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'uploads',
            resource_type: 'auto'
        });

        const data = {
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            url: result.secure_url
        }
        req.data = data
        next()
    } catch (error) {
        next(createError(500, 'Error uploading file to Cloudinary'))
    }
}

const deleteCloudinary = async (req, res, next) => {
    try {
        const { cloudinaryPath } = req.body;

        const removeFormat = cloudinaryPath.split('.');
        removeFormat.pop();

        const public_id = removeFormat.join('.').split('/').slice(-2).join('/');

        console.log(public_id);

        if (!public_id) {
            return next(createError(400, "Public ID of the image to delete is required"));
        }

        await cloudinary.uploader.destroy(public_id);

        next()
    } catch (error) {
        next(createError(500, 'Error uploading file to Cloudinary'))
    }
}

module.exports = {
    uploadCloudinary,
    deleteCloudinary,
} 