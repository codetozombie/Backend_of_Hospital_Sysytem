// frontexeModel.js
const mongoose = require('mongoose');

const frontexeSchema = mongoose.Schema({
  frontexeName:{
    type:String,
    requred: true,
  },
  frontexeSpec :{
    type: String,
    required: true,}
});

const Frontexe = mongoose.model('Frontexe', frontexeSchema);

module.exports = Frontexe;
