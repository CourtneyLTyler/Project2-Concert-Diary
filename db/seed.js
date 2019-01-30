const User = require("../models/User");
const { Concert } = require("../models/Concert");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Concert.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: "bugsbunny"
    }).then(user => {
        Promise.all([
          Concert.create({
            content: "eh, what's up doc?",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            content: "That's all, folks!",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })



