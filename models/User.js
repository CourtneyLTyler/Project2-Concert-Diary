const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
	username: String,
  email: String,
  password: String,
  concerts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Concert"
    }
  ]
});

module.exports = mongoose.model("User", User);
