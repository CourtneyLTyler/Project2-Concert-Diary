const User = require("../models/User");
const { Concert } = require("../models/Concert");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Concert.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: "bugsbunny",
        username: "bugs"
    }).then(user => {
        Promise.all([
          Concert.create({
            artistOrArtists: "a1",
            url: "u1",
            noteworthy: "n1",
            photos: "p1",
            datedAttended: "11/11/11",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "a2",
            url: "u2",
            noteworthy: "n2",
            photos: "p2",
            datedAttended: "11/11/11",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })



