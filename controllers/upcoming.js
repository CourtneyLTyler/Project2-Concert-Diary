const {Upcoming, Commentup} = require("../models/Upcoming")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Upcoming.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, upcoming) {
        Commentup.populate(upcoming.commentups, { path: "author" }, function(
          err,
          commentups
        ) {
          upcoming.commentups = commentups
          upcoming.save()
          res.render("upcoming/show", upcoming)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("upcoming/new", { users })
      })
    },
    create: (req, res) => {
      Upcoming.create({
        artistOrArtists: req.body.upcoming.artistOrArtists,
        venue: req.body.upcoming.venue,
        showDate: req.body.upcoming.showDate,
        author: req.body.author
      }).then(upcoming => {
        User.findOne({ _id: req.body.author }).then(user => {
          user.upcomings.push(upcoming)
          user.save(result => {
            res.redirect(`/upcoming/${upcoming._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      let { content, author } = req.body;
      Upcoming.findOne({ _id: req.params.id }).then(upcoming => {
        Commentup.create({ content, author: req.user._id }).then(newCommentup => {
          upcoming.commentups.push(newCommentup)
          upcoming.save(err => {
            res.redirect(`/upcoming/${upcoming._id}`);
          });
        })
      });
    },
    delete: (req, res) => {
      Upcoming.findOneAndRemove({ _id: req.params.id }).then(upcoming => {
        res.redirect('/')
      });
    },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};