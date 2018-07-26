const twitterClient = require("../config/twitterConfig");

const Twitter = require('twitter');
const keys = require("../config/keys");

var client = new Twitter({
  consumer_key: keys.twitter.consumerKey,
  consumer_secret: keys.twitter.consumerSecret,
  access_token_key: "93176471-J5d6m3dH30KtKgYKaTZ14pL7gJMkzMxTj3ilTrzaj",
  access_token_secret: "EDKzls5uKVy9rkUqEZZJ3d2mMxkBnsqY4PZiTBMxA2Ret",
  request_options: { json: true }
});


exports.twitter = async (req, res, next) => {

  // client.post('friendships/create', { screen_name: 'leomercier', follow: true }, function(err, data, response) {
  //     res.status(200).json({client, err, data, response})
  // })

  client.get('account/verify_credentials', { screen_name: 'harrydry', include_email: true, include_entities: true }, function(err, data, response) {
      res.status(200).json({ err, data, response})
  })

};
