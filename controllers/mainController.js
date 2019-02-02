const axios = require("axios");

exports.home = async (req, res) => {
  res.render("page1");
};

exports.subscribe = async (req, res) => {
  axios({
    baseURL: "https://us19.api.mailchimp.com/3.0/lists/ce0fecc847/members",
    auth: {
      username: "harrydry1996@gmail.com",
      password: `${process.env.MAILCHIMP}`
    },
    method: "POST",
    data: {
      email_address: req.body.email,
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: ""
      }
    }
  })
    .then(res => console.log(res))
    .catch(function(error) {
      console.log(error);
    });
  res.json({ some: "json" });
};
