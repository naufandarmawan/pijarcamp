const pool = require("../configs/db");
const { response } = require("../helper/common");
const { createMyExperience, selectMyExperience, deleteMyExperienceId, putMyExperience, selectWorkerExperience } = require("../models/experience");
const { findWorker } = require("../models/workers");
const createError = require('http-errors')

const setClient = require('../configs/redis')

// Add experience
const addMyExperience = async (req, res, next) => {
    try {
        // Set ID sendiri?
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { position, company, start_date, end_date, description } = req.body;

        const startDate = new Date(start_date);
        const endDate = new Date(end_date);
        const duration = Math.abs(startDate - endDate);
        const durationInMonths = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30));

        const data = {
            position,
            company,
            start_date,
            end_date,
            duration_in_months: durationInMonths,
            description
        }

        await createMyExperience(data, worker.id)
        // await pool.query(`INSERT INTO experience (position, company, start_date, end_date, duration_in_months, description, worker_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [data.position, data.company, data.start_date, data.end_date, data.duration_in_months, data.description, id]);

        response(res, data, 200, `Add experience: ${data.position} - ${data.company} success.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Get experience
const getMyExperience = async (req, res, next) => {
    try {
        // Set ID sendiri?

        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { rows } = await selectMyExperience(worker.id)

        // const client = await setClient()
        // await client.setEx(`worker/${worker.id}`, 60 * 60, JSON.stringify(rows))

        response(res, rows, 200, `Experience listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Delete experience
const deleteMyExperience = async (req, res, next) => {
    try {
        // Set ID sendiri?
        // Set ID skill?

        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const experience_id = req.params.experience_id

        await deleteMyExperienceId(worker.id, experience_id)

        response(res, experience_id, 200, `Experience deleted successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Update experience
const updateMyExperience = async (req, res, next) => {
    try {
        const experience_id = req.params.experience_id
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { position, company, start_date, end_date, description } = req.body;


        const startDate = new Date(start_date);
        const endDate = new Date(end_date);
        const duration = Math.abs(startDate - endDate);
        const durationInMonths = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30));

        const data = {
            position,
            company,
            start_date,
            end_date,
            duration_in_months: durationInMonths,
            description
        }

        await putMyExperience(data, worker.id, experience_id)

        response(res, data, 200, `Experience updated successfully.`)
    } catch (error) {
        next(new createError[500])
    }

}

// Get experience per id worker
const getWorkerExperience = async (req, res, next) => {
    try {
        const id = req.params.worker_id

        const { rows } = await selectWorkerExperience(id)

        response(res, rows, 200, `Worker id: ${id}'s experiences listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};


module.exports = {
    addMyExperience,
    getMyExperience,
    deleteMyExperience,
    updateMyExperience,
    getWorkerExperience,
};