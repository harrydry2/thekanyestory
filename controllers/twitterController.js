const twitterClient = require("../config/twitterConfig");

exports.twitter = async (req, res, next) => {

  // client.post('friendships/create', { screen_name: 'leomercier', follow: true }, function(err, data, response) {
  //     res.status(200).json({client, err, data, response})
  // })

  twitterClient.get('account/verify_credentials', { screen_name: 'harrydry', include_email: true }, function(err, data, response) {
      res.status(200).json({ err, data, response})
  })

};
