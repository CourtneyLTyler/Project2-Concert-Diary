const {Concert, Comment} = require("../models/Concert")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Concert.findOne({ _id: req.params.id })
			// .populate("author")
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
				photo: req.body.concert.photo,
				dateAttended: req.body.concert.dateAttended,
				// author: req.body.concert.author
				author: req.body.author
				// author: `${author.username}`
				// author: `${User.username}`
      }).then(concert => {
        user.findOne({ _id: req.body.author }).then(user => {
          user.concerts.push(concert)
          user.save(result => {
            console.log(result)
            res.redirect(`/concert/${concert._id}`)
          })
        })
      })
		},
		// see if this format will work instead - still not sure how to add the username to the db 
		// app.post("/addname", (req, res) => {
		// 	var myData = new User(req.body);
		// 	myData.save()
		// 	.then(item => {
		// 	res.send("item saved to database");
		// 	})
		// 	.catch(err => {
		// 	res.status(400).send("unable to save to database");
		// 	});
		//  });



    update: (req, res) => {
      let { artistOrArtists, url, noteworthy, photo, dateAttended, author } = req.body;
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
		},
	  requireAuth: function(req, res, next) {
			if (req.isAuthenticated()) {
				next();
			} else {
				res.redirect("/");
			}
		}	
};