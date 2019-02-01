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
            photos: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/49678695_10105225921029239_816854774849732608_o.jpg?_nc_cat=109&_nc_ht=scontent-atl3-1.xx&oh=9a532a1b08c41bca9370b41d09d4353a&oe=5CC25EBD",
            dateAttended: "12/27/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "Theivery Corporation",
            venue: "9:30 Club",
            noteworthy: "Heaven's Gonna Burn Your Eyes",
            photos: "https://image-ticketfly.imgix.net/00/02/98/53/58-og.jpg?w=960&h=960",
            dateAttended: "12/13/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),
          Concert.create({
            artistOrArtists: "San Holo",
            venue: "The Jefferson Theater",
            noteworthy: "vibey visuals",
            photos: "https://scontent-amt2-1.cdninstagram.com/vp/76e4da63cb457090c6fc1436fb708c6b/5C9691F7/t51.2885-15/e35/c236.0.607.607/44528953_789747721385123_3519530630446190676_n.jpg",
            dateAttended: "11/11/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),     
          Concert.create({
            artistOrArtists: "Christinne and the Queens",
            venue: "9:30 Club",
            noteworthy: "Saint Claude, Tilted, and generally everything about the show",
            photos: "https://static1.squarespace.com/static/4f705ee1e4b0aad9750e2e27/52f6867ae4b05acac210af8a/5be37933f950b738fa2345c5/1543795276432/Christine_and_the_Queens_11072018_MauricioCastro-15.jpg?format=2500w",
            dateAttended: "11/4/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),   
          Concert.create({
            artistOrArtists: "Wu-Tang Clan",
            venue: "The Anthem",
            noteworthy: "Bring Da Ruckus",
            photos: "https://www.undertheradar.co.nz/images/image.php/wutangphotos20181240.jpg?width=1220&cropratio=1.8:1&image=/images/newsImages/wutangphotos20181240.jpg",
            dateAttended: "11/1/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }), 
          Concert.create({
            artistOrArtists: "Garbage",
            venue: "Lincoln Theater",
            noteworthy: "Shirley!",
            photos: "https://photos.bandsintown.com/thumb/8004949.jpeg",
            dateAttended: "10/22/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),    
          Concert.create({
            artistOrArtists: "Foreign Air",
            venue: "U Street Music Hall",
            noteworthy: "Chakra Daemon",
            photos: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1044306_10207137466249616_2879258861445962033_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=0cf5f6d47a67f9d6ee08569885bb3089&oe=5CE9FB9D",
            dateAttended: "10/17/18",
            author: user._id
          }).then(concert => {
            user.concerts.push(concert)
          }),     
          Concert.create({
            artistOrArtists: "Nine Inch Nails",
            venue: "The Anthem",
            noteworthy: "Perfect Drug",
            photos: "https://i.ytimg.com/vi/vmjgM7XSyT4/maxresdefault.jpg",
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



