const User = require("../models/User");
const Profile = require("../models/Profile");
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      console.log('show concert')
      Profile.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, profile) {
        Comment.populate(profile.comments, { path: "author" }, function(
          err,
          comments
        ) {
          profile.comments = comments
          profile.save()
          res.render("profile/show", profile)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("profile/new", { users })
      })
    },
    create: (req, res) => {
      console.log('running create')
      Profile.create({
        favoriteConcert: req.body.profile.favoriteConcert,
        favoriteArtist: req.body.profile.favoriteArtist,
        upcomingShows: req.body.profile.upcomingShows,
      })
    },
    update: (req, res) => {
      let { favoriteConcert, favoriteArtist, upcomingShows } = req.body;
      // console.log('concert update')
      // console.log('body', req.body)
      // console.log(req.user)
      Profile.findOneAndUpdate({ _id: req.params.id }, req.body).then(
          profile.save(err => {
            res.redirect(`/profile/${profile._id}`);
          })
      )
    },
    delete: (req, res) => {
      Profile.findOneAndRemove({ _id: req.params.id }).then(profile => {
        res.redirect('/')
      });
    },
  requireAuth: function(req, res, next) {
    console.log('requireauth')
    if (req.isAuthenticated()) {
      next();
    } else {
      console.log('redirect to /')
      res.redirect("/");
    }
  }
};