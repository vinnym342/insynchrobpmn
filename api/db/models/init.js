const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/insynchro-boilerplate')

const db = mongoose.connection

module.exports = mongoose
