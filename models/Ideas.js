const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Please Enter an Idea"
    },
    desc: {
      type: String
    },
    upVotes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Users"
      }
    ],
    created: {
      type: Date,
      default: Date.now
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Users"
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// ideaSchema.statics.sortIdeas = function() {
//   return this.aggregate([
//     {
//       $lookup: {
//         from: "comments",
//         localField: "_id",
//         foreignField: "idea",
//         as: "comments"
//       }
//     },
//     {
//       $lookup: {
//         from: "users",
//         localField: "author",
//         foreignField: "_id",
//         as: "authorLookup"
//       }
//     },
//     {
//       $addFields: { upVotesLength: { $size: { $ifNull: ["$upVotes", []] } } }
//     },
//     {
//       $addFields: { timePoints: big }
//     },
//     { $sort: { upVotesLength: -1 } }
//   ]);
// };

// local Field is the field on our Ideas Schema
// foreign Field is the field on our Comments Schema
ideaSchema.virtual("comments", {
  ref: "Comments",
  localField: "_id",
  foreignField: "idea"
});

function autopopulate(next) {
  this.populate("author comments");
  next();
}

ideaSchema.pre("find", autopopulate);
ideaSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Ideas", ideaSchema);
