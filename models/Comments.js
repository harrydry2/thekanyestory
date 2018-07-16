const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const commentsSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Users"
  },
  idea: {
    type: mongoose.Schema.ObjectId,
    ref: "Ideas"
  },
  comment: {
    type: String,
    required: "Your comment must have text"
  },
  upVotes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Users"
    }
  ]
});

function autopopulate(next) {
  this.populate("author");
  next();
}

commentsSchema.pre("find", autopopulate);
commentsSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Comments", commentsSchema);
