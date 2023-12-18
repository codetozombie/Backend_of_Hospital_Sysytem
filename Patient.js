// patientModel.js
const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  patientid: {
    type: Number,
    required: true,
  },
  surname:{
    type: String,
    require: true,
  },

  gender:{
    type: String,
    required: true,
  },

  phone:{
    type: String,
    required: true,
  },

  residentialAddress:{
    type: String,
    requred: true,
  },
  emergencyContactName :{
    type:String,
    required: true,
  },
  emergencyContact :{
    type:Number,
    required: true,
  },
  emergencyContactRelation :{
    type:String,
    required: true,
  }, timestamp: {
    type: Date,
    default: Date.now},
    patientBloodPressure:{
      type: String,
  
    },patientBloodTemperautre:{
      type: String,
  
    },patientBloodPulse:{
      type: String,
  
    },patientBloodSPO2:{
      type: String,
  
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
