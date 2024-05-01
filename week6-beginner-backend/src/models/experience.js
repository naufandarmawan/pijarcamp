const pool = require("../configs/db");

const createMyExperience = (data, id) =>{
  return pool.query(`INSERT INTO experience (position, company, start_date, end_date, duration_in_months, description, worker_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [data.position, data.company, data.start_date, data.end_date, data.duration_in_months, data.description, id]);
}

const selectMyExperience = (id) =>{
  return pool.query("SELECT id, position, company, start_date, end_date, duration_in_months, description FROM experience WHERE worker_id = $1", [id]);
}

const deleteMyExperienceId = (worker_id, experience_id) =>{
  return pool.query("DELETE FROM experience WHERE worker_id = $1 and id = $2 ", [worker_id, experience_id]);
}

const putMyExperience = (data, worker_id, experience_id) =>{
  return pool.query("UPDATE experience SET position = $1, company= $2, start_date = $3, end_date=$4, duration_in_months = $5, description = $6 WHERE worker_id = $7 AND id = $8", [data.position, data.company, data.start_date, data.end_date, data.duration_in_months, data.description, worker_id, experience_id])
}

const selectWorkerExperience = (id) =>{
  return pool.query("SELECT id, position, company, start_date, end_date, duration_in_months, description FROM experience WHERE worker_id = $1", [id]);
}


module.exports = {
  createMyExperience,
  selectMyExperience,
  deleteMyExperienceId,
  putMyExperience,
  selectWorkerExperience
}