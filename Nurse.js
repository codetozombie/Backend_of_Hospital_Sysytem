// patientModel.js
const mongoose = require('mongoose');

const nurseSchema = mongoose.Schema({
  // ... (patientSchema definition)
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Nurse;
