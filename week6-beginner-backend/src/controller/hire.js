const pool = require("../configs/db");
const { addHire, selectWorkerHire, selectRecruiterHire } = require('../models/hire')
const { response } = require("../helper/common")
const createError = require('http-errors')

// Add hire
const createHire = async (req, res, next) => {
    try {
        // Set ID sendiri?

        // connect pake query params ae (to, from)
        // Form kan ada. Berarti harus narik data dulu dari recruiter id?

        // const { purpose, recruiter_company, recruiter_email, recruiter_phone, description, } = req.body;
        const id = req.query.user
        const { worker_id, purpose, name, company, email, phone, description } = req.body;

        // const userResult = await pool.query('SELECT company, email, phone FROM recruiters WHERE id = $1', [recruiter_id])

        // const userCompany = userResult.rows[0].company
        // const userEmail = userResult.rows[0].email
        // const userPhone = userResult.rows[0].phone

        const data = {
            worker_id, 
            purpose, 
            name, 
            company, 
            email, 
            phone, 
            description
        }

        await addHire(id, data)

        response(res, data, 200, `Hiring request success.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Get hire with worker (hiring history for worker)
const getWorkerHire = async (req, res, next) => {
    try {
        // History Worker direcruit - from hire where worker idnya x
        const id = req.query.user

        const { rows } = await selectWorkerHire(id)

        response(res, rows, 200, `Worker hiring history listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Get hire with recruiters (hiring history for recruiters)
const getRecruiterHire = async (req, res, next) => {
    try {
        // History recruiter merecruit - from hire where recruiter idnya x

        const id = req.query.user

        const { rows } = await selectRecruiterHire(id)

        response(res, rows, 200, `Recruiter hiring history listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }
};

module.exports = {
    createHire,
    getWorkerHire,
    getRecruiterHire,
};