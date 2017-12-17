const mongoose = require("mongoose");
const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");

module.exports = app => {
  app.post("/contact", (req, res) => {
    const { EmailAddress } = req.body;
    const email = new Email(req.body).save();
    // nodemailer Stuff
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harrydryofficial@gmail.com",
        pass: "DavidLuiz4"
      }
    });
    const mailOptions = {
      from: `<harrydryofficial@gmail.com>`, // sender address
      to: "harrydry1996@gmail.com ", // list of receivers
      subject: "New Mail List Sign Up", // Subject line
      html: `
      The following Email Address has just signed up to your Mail List<br><br>
      Email: ${EmailAddress} <br><br>
      Don't worry if you lose this email. Once a month I'll provide a full breakdown of site analytics, including a list of all your mail list subscribers
      `
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.redirect(`/`);
  });
};
