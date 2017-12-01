const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://harrydry:DavidLuiz4@ds127126.mlab.com:27126/maximize"
);
require("./models/Email.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", expressStaticGzip("dist"));

require("./routes/emailRoutes")(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 7101;
app.listen(PORT, () => console.log("listening"));
