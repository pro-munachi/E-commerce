const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
