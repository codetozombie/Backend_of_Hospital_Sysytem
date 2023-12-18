// patientModel.js
const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  // ... (patientSchema definition)
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Doctor;
