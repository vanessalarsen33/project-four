const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: Date,
  time: String,
  service: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Appointment', appointmentSchema)
