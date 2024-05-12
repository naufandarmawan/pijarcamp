const pool = require("../configs/db");

const createSkill = (id, skill_name) => {
  return pool.query(`INSERT INTO skill(skill_name, worker_id) VALUES ($1, $2)`, [skill_name, id]);
}

const selectMySkill = (id) => {
  return pool.query("SELECT id, skill_name, created_at, updated_at FROM skill WHERE worker_id = $1", [id]);
}

const skillCheck = (id) => {
  return pool.query(`SELECT * from skill WHERE id = $1`, [id])
}

const deleteMySkillId = (id, skill_id) => {
  return pool.query("DELETE FROM skill WHERE worker_id = $1 and id = $2 ", [id, skill_id]);
}

const selectWorkerSkill = (id) => {
  return pool.query("SELECT id, skill_name, created_at, updated_at FROM skill WHERE worker_id = $1", [id]);
}
// const create = ({name, description, stock})=>{
//   return pool.query(
//     `INSERT INTO products (name, description, stock) VALUES ($1, $2, $3)`,
//     [name, description, stock]
//   );
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
  createSkill,
  selectMySkill,
  skillCheck,
  deleteMySkillId,
  selectWorkerSkill
}