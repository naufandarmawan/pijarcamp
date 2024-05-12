const pool = require("../configs/db");

const findRecruiter = (email) => {
  return pool.query(`SELECT id FROM recruiters WHERE email = $1`, [email])
}

const createRecruiterAccount = ({email, password, role, verificationToken, verified})=>{
  return pool.query(`INSERT INTO users(email, password, role, verification_token, verified)VALUES ($1, $2, $3, $4, $5) RETURNING id`, [email, password, role, verificationToken, verified])
}

const addAccountDetails = ({id, name, email, company, position, phone})=>{
  return pool.query(`INSERT INTO recruiters(user_id, name, email, company, position, phone)VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`, [id, name, email, company, position, phone]) 
}

const selectMyProfile = (id)=>{
  return pool.query("SELECT id, photo, name, company, email, industry, location, description, instagram, phone, linkedin FROM recruiters WHERE id = $1", [id]);
}
const putMyProfile = (data, id)=>{
  return pool.query("UPDATE recruiters SET photo = $1, name = $2, company = $3, position = $4, industry = $5, location = $6, description = $7, instagram = $8, phone = $9, linkedin = $10 WHERE id = $11", [data.photo, data.name, data.company, data.position, data.industry, data.location, data.description, data.instagram, data.phone, data.linkedin, id])
}

module.exports = {
  findRecruiter,
  createRecruiterAccount,
  addAccountDetails,
  selectMyProfile,
  putMyProfile,
}