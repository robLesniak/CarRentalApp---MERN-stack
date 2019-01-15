const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required:true,
  },
  plateNumber: {
    type: String,
    required: true,
    unique: true
  },
  fuelType: {
    type: String,
    required: true,
  },
  isRented: {
    type: Boolean
  }
})

module.exports = mongoose.model('Car', carSchema);