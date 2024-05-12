const pool = require("../configs/db");
const { createRecruiterAccount, addAccountDetails, selectMyProfile, putMyProfile, findRecruiter } = require('../models/recruiters')
const { findUser } = require('../models/auth')
const { response } = require("../helper/common")
const sendVerificationEmail = require('../helper/nodemailer')
const { generateVerificationToken } = require("../helper/auth");
const createError = require('http-errors')
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Register
const registerRecruiter = async (req, res, next) => {
    try {
        const { name, email, company, position, phone, password  } = req.body
        
        // fail harusnya ada position dan industry -- cari cara untuk masukin table posisi
        
        if (!name || !email || !company || !position || !phone || !password) {
            return next(createError(400, 'name, email, company, position, phone, and password are required'));
        }

        const {rows:[user]}  = await findUser(email)
        if(user){
            return next(createError(400, 'User is already registered'))
        }

        const hashPassword = await bcrypt.hash(password, saltRounds)

        const verificationToken = generateVerificationToken(req.body)
        
        const dataUser = {
            email,
            password: hashPassword,
            role: 'Recruiter',
            verificationToken,
            verified: false
        }

        const userResult = await createRecruiterAccount(dataUser)

        const userId = userResult.rows[0].id

        const dataRecruiter = {
            id: userId,
            name, 
            email, 
            company, 
            position, 
            phone, 
        }

        const recruiterResult = await addAccountDetails(dataRecruiter)
        
        const recruiterId = recruiterResult.rows[0].id

        const userData = {
            id: recruiterId,
            name,
            phone,
            email,
            company, 
            position,
        }

        await sendVerificationEmail(email, verificationToken)

        response(res, userData, 200, 'Registration for worker successful. Please kindly check your email and verify your account before logging in.')
    } catch (error) {
        next(new createError[500])
    }

}


// Get profile (my profile)
const getMyProfile = async (req, res, next) => {
    try {
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [recruiter] } = await findRecruiter(email)

        const { rows } = await selectMyProfile(recruiter.id)

        response(res, rows, 200, 'Get profile success')
    } catch (error) {
        next(new createError[500])
    }

}

// Update profile
const updateMyProfile = async (req, res, next) => {
    try {
        // const { id } = 0
        // const id = req.query.user
        const emailId = req.decoded.email
        const { rows: [recruiter] } = await findRecruiter(emailId)

        const { photo, name, company, position, industry, location, description, instagram, phone, linkedin } = req.body

        const data = {
            photo, 
            name, 
            company, 
            position,
            industry, 
            location, 
            description, 
            instagram, 
            phone, 
            linkedin
        }

        await putMyProfile(data, recruiter.id)

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