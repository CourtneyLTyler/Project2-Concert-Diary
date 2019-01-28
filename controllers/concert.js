const {Concert, Comment} = require("../models/Concert")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Concert.findOne({ _id: req.params.id })
			.populate("author")
			// will this already populate?
			// .populate("dateAttended")
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
      Concert.create({
				artistOrArtists: req.body.concert.artistOrArtists,
				url: req.body.concert.url,
				noteworthy: req.body.concert.noteworthy,
				photos: req.body.concerts.photos,
				dateAttended: req.body.concert.dateAttended,
        author: req.body.author
      }).then(concert => {
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
      Question.findOne({ _id: req.params.id }).then(question => {
        question.answers.push({
          content,
          author
        });
        question.save(err => {
          res.redirect(`/question/${question._id}`);
        });
      });
    },

    update: (req, res) => {
      let { artistOrArtists, url, noteworthy, photos, dateAttended, author } = req.body;
      Concert.findOne({ _id: req.params.id }).then(concert => {
        concert.comments.push({
					artistOrArtists,
					url,
					noteworthy,
					photos,
					dateAttended,
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
		},
	  requireAuth: function(req, res, next) {
			if (req.isAuthenticated()) {
				next();
			} else {
				res.redirect("/");
			}
		}	
};