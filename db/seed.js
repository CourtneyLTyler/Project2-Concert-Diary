const User = require("../models/User");
const { Concert } = require("../models/Concert");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Concert.find({}).remove(() => {
    let uniCourt = User.create({
        username: "uniCourt",
        email: "unicourt@gmail.com",
        password: "abc-123"
    }).then(user => {
        Promise.all([
          Concert.create({
            artistOrArtists: "eh, what's up doc?",
            url: "sfsafa",
            noteworthy: "fjdklsa;",
            photos: "url",
            dateAttended: "11/11/11",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "eh, what's up doc?",
            url: "sfsafa",
            noteworthy: "fjdklsa;",
            photos: "url",
            dateAttended: "11/11/11",
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



