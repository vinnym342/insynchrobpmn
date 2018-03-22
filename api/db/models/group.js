const mongoose = require('./init')

const groupSchema = mongoose.Schema({
  group: String,
  name: String,
});

const Group = mongoose.model('Group', groupSchema)

module.exports = Group
