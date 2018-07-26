var path = require("path");
var nodemailer = require("nodemailer");
var mg = require("nodemailer-mailgun-transport");
var Email = require("email-templates");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

const email = new Email({
  message: {
    from: `"Ideas Are Worthless" <${process.env.MAILGUN_FROM_EMAIL}>`
  },
  views: {
    root: path.join(__dirname, "..", "emails", "content")
  },
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
      relativeTo: path.join(__dirname, "..", "emails", "build"),
      images: false
    }
  },
  transport: nodemailer.createTransport(mg(auth)),
  send: true
});

const sendMail = mailOptions => {
  email.send({
    template: mailOptions.template,
    message: {
      to: mailOptions.to,
      subject: mailOptions.subject,
      "o:tag": mailOptions.template
    },
    locals: Object.assign({}, mailOptions.context)
  });
};

module.exports = {
  email,
  sendMail
};
