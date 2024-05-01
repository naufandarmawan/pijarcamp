const pool = require("../configs/db");
const { response } = require("../helper/common")
const { selectAccount, selectUser, selectRole } = require("../models/auth")
const createError = require('http-errors')


// login
const login = async (req, res, next) => {
    try {
    const { email, password } = req.body

    const { rows } = await selectAccount(email, password);

    response(res, rows, 200, 'Login Successful')
    // res.json({
    //     status: 'Success',
    //     message: 'Login successful!',
    // });

    // Ide saat ini adalah untuk menarik user_id untuk disimpan ke localStorage bila berhasil.
    } catch (error) {
        next(new createError[500])
    }

}

// logout
const logout = async (req, res, next) => {
    try {
        // Harunsya sih gak ngapa-ngapain
        id = req.query.user

        const { rows } = await selectUser(id);

        response(res, rows, 200, 'Logout Successful')
        // Melanjutkan ide login, berarti logout harus menghapus localStorage
    } catch (error) {
        next(new createError[500])
    }

}

// check role
const checkRole = async (req, res, next) => {
    try {
        // Melanjutkan ide login, ambil data user_id, lalu cek rolenya

        id = req.query.user

        const { rows } = await selectRole(id)

        response(res, rows, 200, 'Get role success')
    } catch (error) {
        next(new createError[500])
    }

}

module.exports = {
    login,
    logout,
    checkRole,
};