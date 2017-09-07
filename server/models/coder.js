var mongoose = require('mongoose')

var Schema = mongoose.Schema

var CoderSchema = new Schema({
  fullname: String,
  photo: {
    original: String,
    thumbnail: String
  },
  skills: [String]
})

module.exports = mongoose.model('coders', CoderSchema)
