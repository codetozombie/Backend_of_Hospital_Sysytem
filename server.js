const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/frontexe/patients', async (req, res) => {
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
app.post('/nurse/patients', async (req, res) => {
  try {
    const { name, age, condition, bloodGroup, pressure, temperature } = req.body;
    const patient = new Patient({ name, age, condition, bloodGroup, pressure, temperature });
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/nurse/patients', async (req, res) => {
  try {
    const { name, age, condition } = req.body;
    const patient = new Patient({ name, age, condition });
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});