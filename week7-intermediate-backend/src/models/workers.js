const pool = require("../configs/db");

const findWorker = (email) => {
  return pool.query(`SELECT id FROM workers WHERE email = $1`, [email])
}

const createWorkerAccount = ({email, password, role, verificationToken, verified})=>{
  return pool.query(`INSERT INTO users(email, password, role, verification_token, verified)VALUES ($1, $2, $3, $4, $5) RETURNING id`, [email, password, role, verificationToken, verified])
}

const addAccountDetails = ({id, name, phone, email})=>{
  return pool.query(`INSERT INTO workers(user_id, name, phone, email)VALUES ($1, $2, $3, $4) RETURNING id`, [id, name, phone, email]) 
}

const getProfileCard = ({search, sort, sortBy, limit, offset})=>{
  // return pool.query("SELECT workers.id, workers.photo, workers.name, workers.position, ARRAY_AGG(skill.skill_name) AS skill FROM workers LEFT JOIN skill ON workers.id = skill.worker_id GROUP BY workers.id, workers.photo, workers.name, workers.position;");
  // return pool.query("SELECT id, photo, name, position, ARRAY( SELECT skill_name FROM skill WHERE worker_id = workers.id ) AS skills FROM workers ORDER BY id $1 ASC $2 LIMIT $3 OFFSET $4;", [sort, sortBy, limit, offset]);
  return pool.query(`SELECT id, photo, name, position, location, ARRAY( SELECT skill_name FROM skill WHERE worker_id = workers.id ) AS skills FROM workers ${search ? `WHERE name ILIKE '%${search}%'` : ''} ORDER BY ${sort} ${sortBy} LIMIT $1 OFFSET $2`, [limit, offset]);
}

const countWorkers = (search)=>{
  // return pool.query("SELECT id, photo, name, position, ARRAY( SELECT skill_name FROM skill WHERE worker_id = workers.id ) AS skills FROM workers;");
  // return pool.query("SELECT COUNT(*) AS total FROM workers");
  return pool.query(`SELECT COUNT(*) AS total FROM workers ${search ? `WHERE name ILIKE '%${search}%'` : ''}`)
}

const selectMyProfile = (id)=>{
  return pool.query("SELECT id, photo, name, position, location, workplace, description, email, phone, instagram, github, gitlab FROM workers WHERE id = $1", [id]);
}

const putMyProfile = (data, id)=>{
  return pool.query("UPDATE workers SET name = $1, position = $2, location = $3, workplace = $4, description = $5, phone = $6, instagram = $7, github = $8, gitlab = $9 WHERE id = $10", [data.name, data.position, data.location, data.workplace, data.description, data.phone, data.instagram, data.github, data.gitlab, id])
}

const selectWorkerProfile = (id)=>{
  return pool.query("SELECT id, photo, name, position, location, workplace, description, email, phone, instagram, github, gitlab FROM workers WHERE id = $1", [id]);
}

const putMyPhoto = (file, id)=>{
  return pool.query("UPDATE workers SET photo = $1 WHERE id = $2", [file, id])
}

module.exports = {
  findWorker,
  createWorkerAccount,
  addAccountDetails,
  getProfileCard,
  countWorkers,
  selectMyProfile,
  putMyProfile,
  selectWorkerProfile,
  putMyPhoto,
}