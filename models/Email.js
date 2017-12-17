const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const emailSchema = new mongoose.Schema({
  EmailAddress: {
    type: String
  }
});

module.exports = mongoose.model("Email", emailSchema);
