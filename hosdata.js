const mongoose = require('mongoose')

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
    default: Date.now}
});



const frontexeSchema = mongoose.Schema({
  frontexeName:{
    type:String,
    requred: true,
  },
  frontexeSpec :{
    type: String,
    required: true,
  }
})

const nurseSchema = mongoose.Schema({
  nurseName:{
    type:String,
    required: true,
  },
  nurseSpeciality:{
    type:String,
    required:true,
  }
})

const doctorSchema = mongoose.Schema({
  doctorName:{
    type:String,
    required: true,
  },
  doctorSpeciality:{
    type:String,
    required:true,
  }
})


module.exports = Hosdata;