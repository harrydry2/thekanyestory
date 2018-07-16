const mongoose = require("mongoose");
const passport = require("passport");
const Ideas = mongoose.model("Ideas");

exports.logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};
