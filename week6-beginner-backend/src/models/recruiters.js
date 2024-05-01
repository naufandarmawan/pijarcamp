const pool = require("../configs/db");

const createRecruiterAccount = ({email, password})=>{
  return pool.query(`INSERT INTO users(email, password, role)VALUES ($1, $2, 'recruiter') RETURNING id, email`, [email, password])
}

const addAccountDetails = (id, name, email, company, position, phone)=>{
  return pool.query(`INSERT INTO recruiters(user_id, name, email, company, position, phone)VALUES ($1, $2, $3, $4, $5, $6)`, [id, name, email, company, position, phone]) 
}

const selectMyProfile = (id)=>{
  return pool.query("SELECT id, photo, name, company, email, industry, location, description, instagram, phone, linkedin FROM recruiters WHERE id = $1", [id]);
}
const putMyProfile = (data, id)=>{
  return pool.query("UPDATE recruiters SET photo = $1, name = $2, company = $3, email = $4, position = $5, industry = $6, location = $7, description = $8, instagram = $9, phone = $10, linkedin = $11 WHERE id = $12", [data.photo, data.name, data.company, data.email, data.position, data.industry, data.location, data.description, data.instagram, data.phone, data.linkedin, id])
}

module.exports = {
  createRecruiterAccount,
  addAccountDetails,
  selectMyProfile,
  putMyProfile,
}