// controller actions needed: show, login, createlogin, signup, createsignup, logout
const User = require("../models/User")
const { Concert } = require("../models/Concert")

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "concerts",
        // not sure about the limit - look at pagination?
        options: { limit: 10, sort: { dateAttended: -1 } }
      })
      .then(user => {
        res.render("users/show", { user });
      });
  },
//   needs to go somewhere
  login: (req, res) => {
    res.render("users/login");
  },
  createLogin: (req, res) => {
    // authentication code here
    return login(req, res);
  },
// needs to go somewhere
  signUp: (req, res) => {
    res.render("users/signup")
  },
  createSignUp: (req, res) => {
    // code to create user's signup info here
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/")
  }
}