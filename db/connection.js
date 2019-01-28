const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/concertsdb")
mongoose.Promise = Promise

module.exports = mongoose