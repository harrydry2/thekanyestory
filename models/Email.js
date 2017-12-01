const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const emailSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  School: {
    type: String
  },
  Phone: {
    type: String
  },
  EmailAddress: {
    type: String
  },
  Message: {
    type: String
  }
});

module.exports = mongoose.model("Email", emailSchema);
