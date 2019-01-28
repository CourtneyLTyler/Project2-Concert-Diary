const {Concert, Comment} = require("../models/Concert")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Concert.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, concert) {
        Comment.populate(concert.comments, { path: "author" }, function(
          err,
          comments
        ) {
          concert.comments = comments
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
      console.log('body', req.body)
      Concert.create({
        content: req.body.concert.content,
        author: req.body.author
      }).then(concert => {
        console.log('concert ', concert)
        User.findOne({ _id: req.body.author }).then(user => {
          user.concerts.push(concert)
          user.save(result => {
            console.log(result)
            res.redirect(`/concert/${concert._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      console.log('body', req.body)
      let { content, author } = req.body;
      Concert.findOne({ _id: req.params.id }).then(concert => {
        concert.comments.push({
          content,
          author
        });
        concert.save(err => {
          res.redirect(`/concert/${concert._id}`);
        });
      });
    },
    delete: (req, res) => {
      Concert.findOneAndRemove({ _id: req.params.id }).then(concert => {
        res.redirect('/')
      });
    }
};