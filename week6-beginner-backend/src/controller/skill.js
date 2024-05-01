const pool = require("../configs/db");
const { response } = require("../helper/common");
const { createSkill, selectMySkill, deleteMySkillId, selectWorkerSkill } = require("../models/skill");
const createError = require('http-errors')

// Add My Skill
const addMySkill = async (req, res, next) => {
    try {
        const id = req.query.user

        const { skill_name } = req.body

        await createSkill(id, skill_name)

        response(res, { skill_name }, 200, `Add skill: ${skill_name} success.`)
    } catch (error) {
        next(new createError[500])
    }

};


// Get My Skill
const getMySkill = async (req, res, next) => {
    try {
        // Set ID sendiri?
        const id = req.query.user

        const {rows} = await selectMySkill(id) // dalam bentuk array of object
        // const { rows } = await pool.query("SELECT skill_name FROM skill WHERE worker_id = $1", [id]);

        // const skillNames = rows.map(row => row.skill_name); // dalam bentuk array

        response(res, rows, 200, `Skill listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};


// Delete My Skill (skill_id)
const deleteMySkill = async (req, res, next) => {
    try {
        // Set ID sendiri?
        // Set ID skill?

        const id = req.query.user
        const skill_id = req.params.skill_id

        await deleteMySkillId(id, skill_id)

        response(res, skill_id, 200, `Skill deleted successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};


// Get Worker Skill (worker_id)
const getWorkerSkill = async (req, res, next) => {
    try {
        const id = req.params.worker_id

        const { rows } = await selectWorkerSkill(id)

        response(res, rows, 200, `Worker id: ${id}'s skills listed successfully.`)
    } catch (error) {
        next(new createError[500])
    }

};

module.exports = {
    addMySkill,
    getMySkill,
    deleteMySkill,
    getWorkerSkill,
};