const mongoose = require('./init')

const EmployeeSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  designation: String,
  staffNo: Number,
  role: String,
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }
 });

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee
