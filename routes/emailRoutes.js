var nodemailer = require("nodemailer");

module.exports = app => {
  app.post("/contact", (req, res) => {
    const message = req.body.emailMessage;
    // nodemailer Stuff
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harrydry1996@gmail.com",
        pass: "DavidLuiz4"
      }
    });
    const mailOptions = {
      from: "140 Canvas <team@140canvas.com>", // sender address
      to: "harrydry1996@gmail.com", // list of receivers
      subject: "Enquiry from our Brand New Website!", // Subject line
      html: `${message}`
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.json(req.body);
  });
};
