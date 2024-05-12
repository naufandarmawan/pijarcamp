const setClient = require('../configs/redis')
const { response } = require('../helper/common')
const { findWorker } = require('../models/workers')


const hitCacheMyExperience = async (req, res, next) => {
  const client = await setClient()

  const email = req.decoded.email
  const { rows: [worker] } = await findWorker(email)
  const id = worker.id
  console.log(id);

  const experience = await client.get(`worker/${id}`)


  if (experience) {
    return response(res, JSON.parse(experience), 200, `get worker (${id}) experience success from redis`)
  }

  next()
}

const clearCacheMyExperience = async (req, res, next) => {
  const client = await setClient()
  
  const email = req.decoded.email
  const { rows: [worker] } = await findWorker(email)
  const id = worker.id
  console.log(id);

  await client.del(`worker/${id}`)
  next()
}


module.exports = {
  hitCacheMyExperience,
  clearCacheMyExperience,
}