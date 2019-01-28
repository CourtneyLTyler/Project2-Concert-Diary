const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const hbs = require("hbs");
const flash = require("connect-flash");
const session = require('express-session')
const passport = require('passport')

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(flash())

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));


app.use(require("./routes/index.js"))

app.listen(4000, () => {
    console.log('app is listening on port 4000')
})


