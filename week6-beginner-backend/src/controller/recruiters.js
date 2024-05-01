const pool = require("../configs/db");
const { createRecruiterAccount, addAccountDetails, selectMyProfile, putMyProfile } = require('../models/recruiters')
const { response } = require("../helper/common")
const createError = require('http-errors')


// Register
const registerRecruiter = async (req, res, next) => {
    try {
        const { name, email, company, position, phone, password  } = req.body
        // fail harusnya ada position dan industry -- cari cara untuk masukin table posisi
        const data = {
            name, 
            email, 
            company, 
            position, 
            phone, 
            password, 
        }

        const userResult = await createRecruiterAccount(data)

        const userId = userResult.rows[0].id
        const userEmail = userResult.rows[0].email

        await addAccountDetails(userId, data.name, userEmail, data.company, data.position, data.phone)

        response(res, data, 200, 'Register for recruiter successful')
    } catch (error) {
        next(new createError[500])
    }

}


// Get profile (my profile)
const getMyProfile = async (req, res, next) => {
    try {
        const id = req.query.user

        const { rows } = await selectMyProfile(id)

        response(res, rows, 200, 'Get profile success')
    } catch (error) {
        next(new createError[500])
    }

}

// Update profile
const updateMyProfile = async (req, res, next) => {
    try {
        // const { id } = 0
        const id = req.query.user

        const { photo, name, company, email, position, industry, location, description, instagram, phone, linkedin } = req.body

        const data = {
            photo, 
            name, 
            company, 
            email, 
            position,
            industry, 
            location, 
            description, 
            instagram, 
            phone, 
            linkedin
        }

        await putMyProfile(data, id)

        response(res, data, 200, `Profile updated successfully`)
    } catch (error) {
        next(new createError[500])
    }

}

module.exports = {
    registerRecruiter,
    getMyProfile,
    updateMyProfile,
};