const mongoose = require("mongoose")

console.log(process.env.NEXT_PUBLIC_DB_HOST)

const uri = "blank"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("connected to mongoDB")
})

// const PatientSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
//   DOB: String,
//   gender: String,
//   height: String,
//   weight: String,
//   bloodType: String,
//   allergies: String,
// })

// const Patient = mongoose.model("Patient", PatientSchema)

// let insertPatient = (obj) => {
//   return Patient.insertMany([obj]).then((data) => {
//     return data
//   })
// }

// module.exports.insertPatient = insertPatient

// let getPatient = (email) => {
//   return Patient.findOne({ email: email }).then((data) => {
//     return data
//   })
// }

// module.exports.getPatient = getPatient

// const AppointmentSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   reason: String,
//   time: String,
//   date: String,
// })

// const Appointment = mongoose.model("Appointment", AppointmentSchema)

// let insertAppointment = (obj) => {
//   return Appointment.insertMany([obj]).then((data) => {
//     return data
//   })
// }

// module.exports.insertAppointment = insertAppointment

// let getAppointment = (date) => {
//   return Appointment.find({ date: date }).then((data) => {
//     return data
//   })
// }

// module.exports.getAppointment = getAppointment
