const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const hbs = require("hbs");
const flash = require("connect-flash");
const methodOverride = require("method-override")
const session = require('express-session')
const passport = require('passport')
const cookieParser = require("cookie-parser");

app.set('view engine', 'hbs')

app.use(flash())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
    session({
      secret: "EXPRESS-IS-AWESOME",
      saveUninitialized: true,
      resave: false
    })
  );

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"))

app.listen(4000, () => {
    console.log('app is listening on port 4000')
})


