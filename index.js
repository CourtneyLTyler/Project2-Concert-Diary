const express = require("express");
const app = express();
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require('express-session')
const passport = require('passport')



app.use(flash());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);


require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());


hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));



app.use(require("./routes/index.js"));


app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => console.log(`server is running on PORT ${app.get('port')}!`));

// app.listen(4000, () => console.log("server is running"));

