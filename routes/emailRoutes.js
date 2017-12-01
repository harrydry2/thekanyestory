const mongoose = require("mongoose");
const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");

module.exports = app => {
  app.post("/contact", (req, res) => {
    const {
      firstName,
      lastName,
      School,
      Phone,
      EmailAddress,
      Message
    } = req.body;
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
      from: `${firstName} ${lastName}<harrydryofficial@gmail.com>`, // sender address
      to: "harrydryofficial@gmail.com, info@maximizeyourpotential.co.uk", // list of receivers
      subject: "Enquiry from our Brand New Website!", // Subject line
      html: `
        Name: ${firstName} ${lastName} <br><br>
        School: ${School} <br><br>
        Email: ${EmailAddress} <br><br>
        Phone: ${Phone} <br><br>
        Message: ${Message}
      `
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.redirect(`/`);
  });
};
