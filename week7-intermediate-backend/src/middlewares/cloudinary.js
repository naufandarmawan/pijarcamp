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

        console.log(result);

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
        // // Di awal pakai body, sukses. Tapi setelah adjustment karena DELETE method tidak boleh menggunakan body, jadinya ngambil dari params/query tidak bisa.
        // // const {cloudinaryPath} = req.body;
        // const cloudinaryPath = req.params.img_url;

        // const removeFormat = cloudinaryPath.split('.');
        // removeFormat.pop();

        // const public_id = removeFormat.join('.').split('/').slice(-2).join('/');

        const public_id = req.query.cloudinary_id

        if (!public_id) {
            return next(createError(400, "Public ID of the image to delete is required"));
        }

        const deleteStatus = await cloudinary.uploader.destroy(public_id);

        console.log(deleteStatus);

        if (deleteStatus.result !== "ok") {
            return next(createError(400, 'Error deleting image from Cloudinary'));
        }

        res.deleteStatus = deleteStatus

        next()
    } catch (error) {
        console.log(error);
        next(new createError[500])
    }
}

module.exports = {
    uploadCloudinary,
    deleteCloudinary,
} 