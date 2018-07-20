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
  name: {
    type: String
  },
  upvotes: {
    type: Number,
    default: 0
  },
  email: {
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

userSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {
      delete ret.email;
    }
});

module.exports = mongoose.model("Users", userSchema);
