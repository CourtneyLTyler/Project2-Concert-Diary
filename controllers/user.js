// controller actions needed: show, login, createlogin, signup, createsignup, logout
const User = require("../models/User")
const { Concert } = require("../models/Concert")
const passport = require("passport");

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "concerts",
        // not sure about the limit - look at pagination?
        options: { sort: { dateAttended: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },
  login: (req, res) => {
    res.render("user/login", { message: req.flash ("loginMessage") });
  },
  createLogin: (req, res) => {
		const login = passport.authenticate("local-login", {
			successRedirect: "/",
			failureRedirect: "/user/login",
			failureFlash: true
		})
    return login(req, res);
  },
// needs to go somewhere
  signUp: (req, res) => {
    res.render("user/signup", { message: req.flash ("signupMessage") })
  },
  createSignUp: (req, res) => {
		const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    });
    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/")
  }
}