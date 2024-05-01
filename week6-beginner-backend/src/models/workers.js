const pool = require("../configs/db");

const createWorkerAccount = ({email, password})=>{
  return pool.query(`INSERT INTO users(email, password, role)VALUES ($1, $2, 'worker') RETURNING id, email`, [email, password])
}

const addAccountDetails = (id, name, phone, email)=>{
  return pool.query(`INSERT INTO workers(user_id, name, phone, email)VALUES ($1, $2, $3, $4)`, [id, name, phone, email]) 
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
  return pool.query("SELECT photo, name, position, location, workplace, description, email, phone, instagram, github, gitlab FROM workers WHERE id = $1", [id]);
}
const putMyProfile = (data, id)=>{
  return pool.query("UPDATE workers SET name = $1, position = $2, location = $3, workplace = $4, description = $5, email = $6, phone = $7, instagram = $8, github = $9, gitlab = $10 WHERE id = $11", [data.name, data.position, data.location, data.workplace, data.description, data.email, data.phone, data.instagram, data.github, data.gitlab, id])
}
const selectWorkerProfile = (id)=>{
  return pool.query("SELECT photo, name, position, location, workplace, description, email, phone, instagram, github, gitlab FROM workers WHERE id = $1", [id]);
}

// const addDetails = ({name, phone})=>{
//   return pool.query(`INSERT INTO workers(name, email, password, phone)VALUES ($1, $2, $3, $4)`, [name, email, password, phone]) 
// } 

// const selectAll = () =>{
//   return pool.query("SELECT * FROM products ORDER BY id ASC");
// }

// const drop = (id) =>{
//   return pool.query("DELETE FROM products WHERE id = $1", [id])
// }

// const update = (data, id)=>{
//   return pool.query("UPDATE products SET name= $1, description= $2, stock= $3 WHERE id = $4", [data.name, data.description, data.stock, id])
// }

// const selectOne = (id) =>{
//   return pool.query("SELECT * FROM products WHERE id = $1", [id])
// }

module.exports = {
  createWorkerAccount,
  addAccountDetails,
  getProfileCard,
  countWorkers,
  selectMyProfile,
  putMyProfile,
  selectWorkerProfile,
}