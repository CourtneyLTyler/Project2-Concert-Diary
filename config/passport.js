// removed local - was "passport-local"
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt-nodejs");

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        // Field: "username",
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, callback) {
        User.findOne({ "username": username })
          .then(user => {
            if (user) {
              return callback(
                null,
                false,
                req.flash("signupMessage", "this username is already taken")
              );
            } else {
              let newUser = new User();
              // newUser.username = username;
              newUser.username = username;
              newUser.password = newUser.encrypt(password);

              newUser.save(err => {
                if (err) throw err;
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, callback) {
        User.findOne({ "username": username }, function(err, user) {
          if (err) return callback(err);

          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No user found")
            );
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Ooops, wrong password")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};