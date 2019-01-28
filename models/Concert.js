const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// 
const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Concert = new Schema({
  artistOrArists: String,
  url: String,
//   user-inputted text a/b favorite moments of show
  noteworthy: String,
//   possibly a url string to a link of the photo??
  photos: String,
  dateAttended: Date,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [Comment]
});

module.exports = {
  Concert: mongoose.model("Concert", Concert),
  Comment: mongoose.model("Comment", Comment)
};
