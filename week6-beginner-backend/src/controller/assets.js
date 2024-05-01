const pool = require("../configs/db");
const { response } = require("../helper/common")

// Upload single file

const uploadFile = async (req, res, next) => {
    // Method: POST
    // Butuh body buat di-send, tapi masalahnya ini file
    // Basic response should be Status, Message, Data*
    // * Kalo diperlukan
    // json Message
    // json Data -> File URL
}

module.exports = {
    uploadFile
};