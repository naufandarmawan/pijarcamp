const pool = require("../configs/db");

const addHire = (recruiter_id, data) =>{
  return pool.query(`INSERT INTO hire (recruiter_id, worker_id, purpose, name, company, email, phone, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [recruiter_id, data.worker_id, data.purpose, data.name, data.company, data.email, data.phone, data.description]);
}

const selectWorkerHire = (id) =>{
  return pool.query("SELECT hire.purpose, hire.description, hire.name AS recruiter_name, hire.company AS recruiter_company, hire.email AS recruiter_email, hire.phone AS recruiter_phone, workers.photo AS worker_photo, workers.name AS worker_name, workers.position AS worker_position, workers.location AS worker_location, workers.workplace AS worker_workplace, workers.email AS worker_email, workers.phone AS worker_phone FROM hire INNER JOIN workers ON hire.worker_id = workers.id WHERE hire.worker_id = $1;", [id]);
}

const selectRecruiterHire = (id) =>{
  return pool.query("SELECT hire.purpose, hire.description, hire.name AS recruiter_name, hire.company AS recruiter_company, hire.email AS recruiter_email, hire.phone AS recruiter_phone, workers.photo AS worker_photo, workers.name AS worker_name, workers.position AS worker_position, workers.location AS worker_location, workers.workplace AS worker_workplace, workers.email AS worker_email, workers.phone AS worker_phone FROM hire INNER JOIN workers ON hire.worker_id = workers.id WHERE hire.recruiter_id = $1;", [id]);
  // return pool.query("SELECT hire.purpose, hire.description, recruiters.photo, recruiters.company, recruiters.location, recruiters.industry, recruiters.email, workers.photo, workers.name, workers.position, workers.location, workers.workplace, workers.email FROM hire INNER JOIN recruiters ON hire.recruiter_id = recruiters.id INNER JOIN workers ON hire.worker_id = workers.id WHERE hire.recruiter_id = $1;", [id]);
}

module.exports = {
  addHire,
  selectWorkerHire,
  selectRecruiterHire,
}