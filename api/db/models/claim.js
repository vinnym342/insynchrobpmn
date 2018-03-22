const mongoose = require('./init')

const ClaimSchema = mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  stage: NumberInt,
  problem: Boolean,
  particulars: {
    __id: mongoose.Types.ObjectId(),
    date: Date,
    description: String,
    km: NumberInt,
    toll: NumberInt,
    parking: NumberInt,
    accomodation: NumberInt,
    subsistence: NumberInt,
    other: NumberInt,
    problemDescription: {
      type: String,
    },
  }
 });

const Claim = mongoose.model('Claim', ClaimSchema)

module.exports = Claim
