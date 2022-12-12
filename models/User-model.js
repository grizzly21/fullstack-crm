const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Staff'],
    default: 'Admin'
  }
})

module.exports = mongoose.model('users', userModel)