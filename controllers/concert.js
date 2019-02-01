const {Concert, Comment} = require("../models/Concert")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      console.log('show concert')
      Concert.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, concert) {
        Comment.populate(concert.comments, { path: "author" }, function(
          err,
          comments
        ) {
          concert.comments = comments
          concert.save()
          res.render("concert/show", concert)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("concert/new", { users })
      })
    },
    create: (req, res) => {
      console.log('running create')
      Concert.create({
        artistOrArtists: req.body.concert.artistOrArtists,
        venue: req.body.concert.venue,
        noteworthy: req.body.concert.noteworthy,
        photos: req.body.concert.photos,
        dateAttended: req.body.concert.dateAttended,
        author: req.body.author
      }).then(concert => {
        User.findOne({ _id: req.body.author }).then(user => {
          user.concerts.push(concert)
          user.save(result => {
            res.redirect(`/concert/${concert._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      let { content, author } = req.body;
      // console.log('concert update')
      // console.log('body', req.body)
      // console.log(req.user)
      Concert.findOne({ _id: req.params.id }).then(concert => {
        Comment.create({ content, author: req.user._id }).then(newComment => {
          concert.comments.push(newComment)
          concert.save(err => {
            res.redirect(`/concert/${concert._id}`);
          });
        })
      });
    },
    delete: (req, res) => {
      Concert.findOneAndRemove({ _id: req.params.id }).then(concert => {
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