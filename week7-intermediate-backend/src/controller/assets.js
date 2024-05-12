const pool = require("../configs/db");
const { response } = require("../helper/common");
const createError = require('http-errors');
const fs = require('fs');



const uploadImage = async (req, res, next) => {
    try {
        const data = {
            // localPath: `${process.env.SITE}/file/` + req.file.filename,
            // cloudinaryPath: req.data.url
            file: req.data.url
        }

        response(res, data, 200, `Upload file success`)
    } catch (error) {
        next(new createError[500])
    }

};

const deleteImage = async (req, res, next) => {
    try {
        const {result} = res.deleteStatus

        if (result === "ok") {
            return response(res, null, 200, `Delete file success`);
        }
        // // Delete local file
        // const filePath = req.body.localPath;

        // if (!filePath) {
        //     return next(createError(400, 'File path is required'));
        // }

        // const filename = filePath.split('/').pop();

        // const actualFilePath = `./uploads/${filename}`;

        // fs.unlink(actualFilePath, (err) => {
        //     if (err) {
        //         return next(createError(400, `Error deleting file`));
        //     }
        //     response(res, filePath, 200, `Delete file success`)
        // });

    } catch (error) {
        next(new createError[500])
    }

};



module.exports = {
    uploadImage,
    deleteImage,
};

