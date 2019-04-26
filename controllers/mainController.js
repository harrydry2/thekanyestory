const axios = require("axios");
const mongoose = require('mongoose');

const Emails = mongoose.model('Emails');

exports.home = async (req, res) => {
  res.render("page1");
};

exports.subscribe = async (req, res) => {
  console.log("2")
  try {
    const email = await new Emails(req.body).save();
    console.log("beans")
  }
  catch(err) {
    console.log(err, "err")
  }
  res.json({fuck: "fuck"});
};
