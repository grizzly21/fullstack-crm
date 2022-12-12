const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const authRoutes = require('./routes/auth-routes')
const categoryRoutes = require('./routes/category-routes')
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI)
  .then(() => console.log('DB connected.'))
  .catch(err => console.log(err))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)

module.exports = app