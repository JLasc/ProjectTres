const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");


passport.use(new LocalStrategy(
    (username, password, done) => {
        db.User.findOne({
            where: {
                email: username
            }
        }).then((dbUser) => {
            // If no user/Incorrect password
            if (!dbUser || !dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect Login Credentials"
                });
            }

            return done(null, dbUser);
        });
    }
));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

module.exports = passport;