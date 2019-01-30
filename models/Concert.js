const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

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
  artistOrArtists: String,
  url: String,
  noteworthy: String,
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
