const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id);
  done(null, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: "/auth/twitter/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      const currentUser = await Users.findOne({ twitterId: profile.id });
      if (currentUser) {
        done(null, currentUser);
      } else {
        console.log(profile.displayName);
        const newUser = await new Users({
          twitterId: profile.id,
          username: profile.username,
          profileImg: profile.photos[0].value.replace("normal", "400x400"),
          name: profile.displayName
        }).save();
        console.log(newUser);
        done(null, newUser);
      }
    }
  )
);
