const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  time: String,
  type: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Appointment', eventSchema)
