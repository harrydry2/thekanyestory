const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const twitterClient = require("./twitterConfig");
const _ = require("lodash");

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
      callbackURL: `${keys.serverUrl}/auth/twitter/redirect`,
      includeEmail: true,
    },
    async (accessToken, refreshToken, profile, done) => {

      const currentUser = await Users.findOne({ twitterId: profile.id });



      if (currentUser) {

        currentUser.email = _.get(profile, 'emails[0].value', null)
        currentUser.save((err, save) => {
            done(null, currentUser);
        })

      } else {
  
        const newUser = await new Users({
          twitterId: profile.id,
          username: profile.username,
          profileImg: profile.photos[0].value.replace("normal", "400x400"),
          name: profile.displayName,
          email: _.get(profile, 'emails[0].value', null)
        }).save();

        // follow the user
        twitterClient.post('friendships/create', { screen_name: profile.username, follow: true }, function(err, data, response) {
            // res.status(200).json({client, err, data, response})
            console.log(newUser, "Follow", data);
            done(null, newUser);
        })

      }
    }
  )
);
