const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  twitterId: {
    type: String
  },
  profileImg: {
    type: String
  },
  voted: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Ideas"
    }
  ],
  upvotedComments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comments"
    }
  ]
});

module.exports = mongoose.model("Users", userSchema);
