const twitterClient = require("../config/twitterConfig");

exports.twitter = async (req, res, next) => {

  // client.post('friendships/create', { screen_name: 'leomercier', follow: true }, function(err, data, response) {
  //     res.status(200).json({client, err, data, response})
  // })

  twitterClient.post('statuses/update', { status: '@harrydry have set this up now!' }, function(err, data, response) {
      res.status(200).json({ err, data, response})
  })

};
