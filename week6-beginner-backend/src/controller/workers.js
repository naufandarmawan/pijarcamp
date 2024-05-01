const pool = require("../configs/db");
const { createWorkerAccount, addAccountDetails, getProfileCard, countWorkers, selectMyProfile, putMyProfile, selectWorkerProfile } = require('../models/workers')
const { response } = require("../helper/common")
const createError = require('http-errors')
// next(new createError[400])


// Register
const registerWorker = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body

        const data = {
            name,
            email,
            password,
            phone,
        }

        const userResult = await createWorkerAccount(data)

        const userId = userResult.rows[0].id
        const userEmail = userResult.rows[0].email

        await addAccountDetails(userId, data.name, data.phone, userEmail)

        response(res, data, 200, 'Register for worker successful')
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
        // pake query params?
        const id = req.query.user
        // const { id } = req.body

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

        const { name, position, location, workplace, description, email, phone, instagram, github, gitlab } = req.body

        const data = {
            name,
            position,
            location,
            workplace,
            description,
            email,
            phone,
            instagram,
            github,
            gitlab,
        }

        await putMyProfile(data, id)

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

}

// Update photo profile (/photo)
const updateMyPhoto = async (req, res, next) => {
    try {
        // Next assignment

        response(res, rows, 200, 'Get profile success')
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
    // updateMyPhoto,
};