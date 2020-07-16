const Appointment = require('../models/appointment');


module.exports = {
  index,
  create,
};

// index
async function index(req, res) {
  try{
      const appointments = await Appointment.find({user: req.user._id}).populate('user');
      res.status(200).json(appointments);
  }
  catch(err){
      res.status(500).json(err);
  }
}

// create
async function create(req, res) {
  req.body.user = req.user._id;
  try{
      const appointment = await Appointment.create(req.body);
      res.status(201).json(appointment);
  }
  catch(err){
      res.status(500).json(err);
  }
}
