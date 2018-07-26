var Agenda = require("agenda");
const emailSetup = require("./emailSetup");

const agenda = new Agenda({
  db: {
    address: process.env.MONGO_URL
  }
});

agenda.define("send_email", (job, done) => {
  emailSetup.sendMail(job.attrs.data.mailOptions);
  console.log("send mail harrydry");
  done();
});

(async function() {
  agenda.on("ready", async () => {
    await agenda.start();
  });
})();

module.exports = agenda;
