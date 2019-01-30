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
            artistOrArtists: "artist1",
            url: "url1",
            noteworthy: "noteworthy1",
            photo: "urlphoto1",
            dateAttended: "11/11/11",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "artist2",
            url: "url2",
            noteworthy: "noteworthy2",
            photo: "urlphoto2",
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



