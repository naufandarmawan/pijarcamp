const pool = require("../configs/db");
const { response } = require("../helper/common")
const { createMyPortfolio, selectMyPortfolio, deleteMyPortfolioId, putMyPortfolio, selectWorkerPortfolio } = require("../models/portfolio");
const { findWorker } = require("../models/workers");
const createError = require('http-errors')


// Add experience
const addMyPortfolio = async (req, res, next) => {
    // try {
        // Set ID sendiri?
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { image, name, type, link } = req.body;

        const data = {
            image,
            name,
            type,
            link
        }

        await createMyPortfolio(data, worker.id)

        response(res, data, 200, `Add portfolio: ${data.type} - ${data.name} success.`)
    // } catch (error) {
    //     next(new createError[500])
    // }

};

// Get experience
const getMyPortfolio = async (req, res, next) => {
    try {
        // Set ID sendiri?

        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const { rows } = await selectMyPortfolio(worker.id)

        response(res, rows, 200, `Portfolio listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Delete experience
const deleteMyPortfolio = async (req, res, next) => {
    try {
        // Set ID sendiri?
        // Set ID skill?

        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const portfolio_id = req.params.portfolio_id

        await deleteMyPortfolioId(worker.id, portfolio_id)

        response(res, portfolio_id, 200, `Portfolio deleted successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

// Update experience
const updateMyPortfolio = async (req, res, next) => {
    try {
        // const id = req.query.user
        const email = req.decoded.email
        const { rows: [worker] } = await findWorker(email)

        const portfolio_id = req.params.portfolio_id // Experience ID to change, this one is either user_id, experience_id or, user_id with key[]

        const { image, name, type, link } = req.body;

        const data = {
            image,
            name,
            type,
            link
        }

        await putMyPortfolio(data, worker.id, portfolio_id)

        response(res, data, 200, `Portfolio updated successfully.`)
    } catch (error) {
        next(new createError[500])
    }

}

// Get experience per id worker
const getWorkerPortfolio = async (req, res, next) => {
    try {
        const id = req.params.worker_id

        const { rows } = await selectWorkerPortfolio(id)

        response(res, rows, 200, `Worker id: ${id}'s portfolios listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};


module.exports = {
    addMyPortfolio,
    getMyPortfolio,
    deleteMyPortfolio,
    updateMyPortfolio,
    getWorkerPortfolio
};