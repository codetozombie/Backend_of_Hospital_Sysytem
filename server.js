const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const Patient = mongoose.model('Patient', {
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

const Frontexe = mongoose.model('Frontexe', {
  frontexeName:{
    type:String,
    requred: true,
  },
  frontexeSpec :{
    type: String,
    required: true,
  }
});

const Doctor = mongoose.model('Frontexe', {
  nurseName:{
    type:String,
    required: true,
  },
  nurseSpeciality:{
    type:String,
    required:true,
  }

});


const Nurse = mongoose.model('Frontexe', {
  doctorName:{
    type:String,
    required: true,
  },
  doctorSpeciality:{
    type:String,
    required:true,
  }
});








app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/frontexe/patients/:patientId', async (req, res) => {
  try {
    const { name, age, condition } = req.body;
    const patient = new Patient({ name, age, condition });
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/frontexe', async (req, res) => {
  try {
    const frontexe = await Frontexe.find();
    res.json(frontexe);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/frontexe/appointments', async (req, res) => {
  try {
    const { patientid, secretaryId, appointmentType, date } = req.body;

    res.json({ success: true, message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/nurse/patients/:patientId', async (req, res) => {
  try {
    const { name, age, condition, bloodGroup, pressure, temperature } = req.body;
    const patient = new Patient({ name, age, condition, bloodGroup, pressure, temperature });
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/nurse/patients/:patientId', async (req, res) => {
  try {
    const { name, age, condition } = req.body;
    const patient = new Patient({ name, age, condition });
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/doctors/patients/:patientId', async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




mongoose
  .connect('mongodb+srv://infomealbert:thebase@codetozombie.1b8zuti.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(3000, () => {
  console.log('Node API app is running on port 3000');
});
