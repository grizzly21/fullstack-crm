const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoryModel = new Schema({
  data: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  expandedIcon: {
    type: String,
    default: "pi pi-folder-open",
  },
  collapsedIcon: {
    type: String,
    default: "pi pi-folder"
  },
  children: {
    type: Array,
    required: false
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('categories', categoryModel)