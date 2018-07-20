var Twitter = require('twitter');
const keys = require("./keys");
var promisify = require("promisify-node");

var client = new Twitter({
  consumer_key: keys.twitter.consumerKey,
  consumer_secret: keys.twitter.consumerSecret,
  access_token_key: keys.twitter.accessTokenKey,
  access_token_secret: keys.twitter.accessTokenSecret,
  request_options: { json: true }
});

module.exports = client;
