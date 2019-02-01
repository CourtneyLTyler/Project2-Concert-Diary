const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Profile = new Schema({
    favoriteConcert: String,
    favoriteArtist: String,
    upcomingShows: String
  });

  module.exports = mongoose.model("Profile", Profile);