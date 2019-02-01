const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const User = new Schema({
  username: String,
  password: String,
  concerts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Concert"
    }
  ]
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("User", User);
