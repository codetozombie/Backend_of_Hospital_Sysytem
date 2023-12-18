const mongoose = require('mongoose')

const frontexeSchema = mongoose.Schema({
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
    default: Date.now}
});


module.exports = Patient;