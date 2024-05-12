const pool = require("../configs/db");

// const findEmail = (email)=>{
//   return pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
// }

const findUser = (email)=>{
  return pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

const selectAccount = (email) => {
  // return pool.query("SELECT id, email, role FROM users WHERE email = $1 AND password = $2", [email, password])
  return pool.query("SELECT * FROM users WHERE email = $1 AND verified = true", [email])
}

const selectUser = (id) => {
  return pool.query("SELECT id, email, role FROM users WHERE id = $1", [id])
}

const selectRole = (id) => {
  return pool.query("SELECT id, email, role FROM users WHERE id = $1", [id])
}

module.exports = {
  findUser,
  selectAccount,
  selectUser,
  selectRole,
}