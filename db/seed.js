const User = require("../models/User");
const { Concert } = require("../models/Concert");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Concert.find({}).remove(() => {
    let uniCourt = User.create({
        username: "uniCourt",
        password: "uniCourt"
    }).then(user => {
        Promise.all([
          Concert.create({
            artistOrArtists: "Clutch",
            venue: "Rams Head Live",
            noteworthy: "staff party",
            photos: "none yet",
            dateAttended: "12/27/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "Theivery Corporation",
            venue: "9:30 Club",
            noteworthy: "Heaven's Gonna Burn Your Eyes",
            photos: "none yet",
            dateAttended: "12/13/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "San Holo",
            venue: "The Jefferson Theater",
            noteworthy: "vibey visuals",
            photos: "none yet",
            dateAttended: "11/11/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),     
          Concert.create({
            artistOrArtists: "Christinne and the Queens",
            venue: "9:30 Club",
            noteworthy: "Saint Claude, Tilted, and generally everything about the show",
            photos: "none yet",
            dateAttended: "11/4/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),   
          Concert.create({
            artistOrArtists: "Wu-Tang Clan",
            venue: "The Anthem",
            noteworthy: "Da Mystery of Chessboxin', Bring Da Ruckus, Clan in Da Front",
            photos: "none yet",
            dateAttended: "11/1/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }), 
          Concert.create({
            artistOrArtists: "Garbage",
            venue: "Lincoln Theater",
            noteworthy: "Shirley!",
            photos: "none yet",
            dateAttended: "10/22/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),    
          Concert.create({
            artistOrArtists: "Foreign Air",
            venue: "U Street Music Hall",
            noteworthy: "Chakra Daemon",
            photos: "none yet",
            dateAttended: "10/17/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),     
          Concert.create({
            artistOrArtists: "Nine Inch Nails",
            venue: "The Anthem",
            noteworthy: "Perfect Drug",
            photos: "none yet",
            dateAttended: "10/10/18",
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



