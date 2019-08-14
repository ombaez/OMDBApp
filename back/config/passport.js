const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/User");



passport.serializeUser(function(user, done) {
    done(null, user.id);
  }); /* esta funcion esta serializando el usuario=> como guardo el usuario*/
  
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(user => done(null, user));
  }); /* esta funcion esta deserializando el usuario => como veo el usuario*/
  
  // ESTRATEGIA DE AUTORIZACION
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      function(username, password, done) {
        User.findOne({ where: { email: username } })
          .then(function(user) {
            if (!user) {
              return done(null, false, { message: "Incorrect username." });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: "Incorrect password." });
            }
            return done(null, user);
          })
          .catch(done);
      }
    )
  );

  module.exports = passport;
  