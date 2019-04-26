const axios = require("axios");
const mongoose = require('mongoose');

const Emails = mongoose.model('Emails');

exports.home = async (req, res) => {
  res.render("page1");
};

exports.subscribe = async (req, res) => {
  const email = await new Emails(req.body).save();
  res.json(email);
};
