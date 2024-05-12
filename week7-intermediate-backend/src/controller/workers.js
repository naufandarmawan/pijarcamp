const pool = require("../configs/db");
const { createWorkerAccount, addAccountDetails, getProfileCard, countWorkers, selectMyProfile, putMyProfile, selectWorkerProfile, findWorker, putMyPhoto } = require('../models/workers')
const { findUser } = require('../models/auth')
const { response } = require("../helper/common")
const sendVerificationEmail = require('../helper/nodemailer')
const { generateVerificationToken } = require("../helper/auth");
const createError = require('http-errors')
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Register
const registerWorker = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body

        if (!name || !email || !password || !phone) {
            return next(createError(400, 'Name, email, password, and phone are required'));
        }

        const { rows: [user] } = await findUser(email)
        if (user) {
            return next(createError(400, 'User is already registered'))
        }

        const hashPassword = await bcrypt.hash(password, saltRounds)

        const verificationToken = generateVerificationToken(req.body)

        const dataUser = {
            email,
            password: hashPassword,
            role: 'Worker',
            verificationToken,
            verified: false
        }

        const userResult = await createWorkerAccount(dataUser)

        const userId = userResult.rows[0].id

        const dataWorker = {
            id: userId,
            name,
            phone,
            email,
        }

        const workerResult = await addAccountDetails(dataWorker)

        const workerId = workerResult.rows[0].id

        const userData = {
            id: workerId,
            name,
            phone,
            email,
        }

        await sendVerificationEmail(email, verificationToken)

        response(res, userData, 200, 'Registration for worker successful. Please kindly check your email and verify your account before logging in.')
    } catch (error) {
        next(new createError[500])
    }
}

// Get workers (params)
const getWorkers = async (req, res, next) => {
    try {
        // const { rows } = await pool.query("SELECT workers.photo, workers.name, workers.position, workers.location, skill.skill_name FROM workers;");
        const page = parseInt(req.query.page || 1)
        const limit = parseInt(req.query.limit || 3)
        const sort = req.query.sort || 'created_at'
        const sortBy = req.query.sortBy || 'DESC'
        const search = req.query.search || ''
        const offset = (page - 1) * limit

        // const { rows } = await pool.query("SELECT id, photo, name, position, ARRAY( SELECT skill_name FROM skill WHERE worker_id = workers.id ) AS skills FROM workers ORDER BY id $1 ASC $2 LIMIT $3 OFFSET $4;", [sort, sortBy, limit, offset]); /*getProfileCard({
        //     limit,
        //     offset,
        //     sort,
        //     sortBy,
        //     search,
        // });*/

        const { rows } = await getProfileCard({
            search,
            sort,
            sortBy,
            limit,
            offset
        })
        const { rows: [count] } = await countWorkers(search)
        const totalData = count.total
        const totalPage = Math.ceil(totalData / limit)

        const pagination = {
            limit,
            page,
            totalData,
            totalPage
        }

        response(res, rows, 200, 'Workers listed successfully', pagination)
    } catch (error) {
        next(new createError[500])
    }

}

// Get profile (my profile)
const getMyProfile = async (req, res, next) => {
    try {
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { rows: [profile] } = await selectMyProfile(worker.id)

        response(res, profile, 200, 'Get profile success')
    } catch (error) {
        next(new createError[500])
    }

}

// Update profile
const updateMyProfile = async (req, res, next) => {
    try {
        // Check ini gimana kita ambil sebagai identifier -- Ambil Worker ID

        // const id = req.query.user
        // const id = req.decoded.id
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { name, position, location, workplace, description, phone, instagram, github, gitlab } = req.body

        const data = {
            name,
            position,
            location,
            workplace,
            description,
            phone,
            instagram,
            github,
            gitlab,
        }

        await putMyProfile(data, worker.id)

        response(res, data, 200, `Profile updated successfully`)
    } catch (error) {
        next(new createError[500])
    }

}

// Detail worker (per id)
const getWorkerProfile = async (req, res, next) => {
    try {
        const id = req.params.id

        const { rows } = await selectWorkerProfile(id)

        response(res, rows, 200, `Get profile id: ${id} success`)
    } catch (error) {
        next(new createError[500])
    }
    // Check worker ada apa ngga
}

// Update photo profile (/photo)
const updateMyPhoto = async (req, res, next) => {
    try {
        // Next assignment
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        // Success
        const data = {
            // local: `${process.env.SITE}/file/` + req.file.filename,
            file: req.data.url
        }

        await putMyPhoto(data.file, worker.id)

        response(res, data, 200, 'Update my photo success')
    } catch (error) {
        next(new createError[500])
    }

}

module.exports = {
    registerWorker,
    getWorkers,
    getMyProfile,
    updateMyProfile,
    getWorkerProfile,
    updateMyPhoto,
};