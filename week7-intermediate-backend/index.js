require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

// const productsRoutes = require('./src/routes/products')

const assetsRoutes = require('./src/routes/assets')
const authRoutes = require('./src/routes/auth')
const experienceRoutes = require('./src/routes/experience')
const hireRoutes = require('./src/routes/hire')
const portfolioRoutes = require('./src/routes/portfolio')
const recruitersRoutes = require('./src/routes/recruiters')
const skillRoutes = require('./src/routes/skill')
const workersRoutes = require('./src/routes/workers')


const PORT = process.env.PORT
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet());
app.use(xss())
app.use(cors())

app.get('/', (req, res, next) => {
  res.send('Backend Peworld (Naufan - Mobile 19)')
})



// app.use('/products', productsRoutes)
// app.use('/users', userRoutes)

app.use('/assets', assetsRoutes)
app.use('/auth', authRoutes)
app.use('/experience', experienceRoutes)
app.use('/hire', hireRoutes)
app.use('/portfolio', portfolioRoutes)
app.use('/recruiters', recruitersRoutes)
app.use('/skill', skillRoutes)
app.use('/workers', workersRoutes)


app.use((err, req, res, next) => {
  const messageError = err.message || 'Internal Server Error'
  const statusCode = err.statusCode || 500

  res.status(statusCode).json({
    message: messageError
  })
})

app.use('/file', express.static(path.join(__dirname, '/uploads')))

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
})
