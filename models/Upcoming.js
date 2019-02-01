const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Commentup = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Upcoming = new Schema({
  artistOrArtists: String,
  venue: String,
  showDate: Date,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  commentups: [Commentup]
});

module.exports = {
  Upcoming: mongoose.model("Upcoming", Upcoming),
  Commentup: mongoose.model("Commentup", Commentup)
};
