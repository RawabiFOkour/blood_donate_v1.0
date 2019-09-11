const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BloodDonate', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let donorSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  bloodType: String,
  country: String,
  city: String,
  birthday: Date,
  dateOfPublish: { type: Date, default: Date.now },
  reports: Array,
  numberOfcalls: Number
});

let Donor = mongoose.model('donor', donorSchema);



module.exports = {
  Donor
}



