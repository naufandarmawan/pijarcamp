const pool = require("../configs/db");

const createMyPortfolio = (data, id) =>{
  return pool.query(`INSERT INTO portfolio (image, name, type, link, worker_id) VALUES ($1, $2, $3, $4, $5)`, [data.image, data.name, data.type, data.link, id]);
}

const selectMyPortfolio = (id) =>{
  return pool.query("SELECT id, image, name, type, link FROM portfolio WHERE worker_id = $1", [id]);
}

const deleteMyPortfolioId = (worker_id, portfolio_id) =>{
  return pool.query("DELETE FROM portfolio WHERE worker_id = $1 and id = $2 ", [worker_id, portfolio_id]);
}

const putMyPortfolio = (data, id, portfolio_id) =>{
  return pool.query("UPDATE portfolio SET image = $1, name = $2, type = $3, link = $4 WHERE worker_id = $5 AND id = $6", [data.image, data.name, data.type, data.link, id, portfolio_id])
}

const selectWorkerPortfolio = (id) =>{
  return pool.query("SELECT id, image, name, type, link FROM portfolio WHERE worker_id = $1", [id]);
}

module.exports = {
  createMyPortfolio,
  selectMyPortfolio,
  deleteMyPortfolioId,
  putMyPortfolio,
  selectWorkerPortfolio
}