const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User-model')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // check password
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // generate token
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate.id,
        role: candidate.role
      }, keys.jwt, {expiresIn: 60 * 60});

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      // password not matched
      res.status(401).json({
        message: 'Password not matched'
      })
    }
  } else {
    // not found
    res.status(404).json({
      message: 'User not found'
    })
  }
}

module.exports.register = async function (req, res) {
  console.log(req.body)
  // email password
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    // found user, throw error
    res.status(409).json({
      message: 'This email is already used. Try another, please.'
    })
  } else {
    // need to create user
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      email: req.body.email,
      password: await bcrypt.hash(password, salt),
      name: req.body.name
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}