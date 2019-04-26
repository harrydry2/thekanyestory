require("dotenv").config();
const expressStaticGzip = require("express-static-gzip");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("compression");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://harrydry:${process.env.PWORD}@cluster0-cyuja.mongodb.net/test`,
  { useNewUrlParser: true }
).then(() => {
  console.log("connection 100%")
}).catch( (err) => console.log("******************* ******************************************************************************************************************", err));
require('./models/Emails.js');

const fs = require("fs");
const app = express();

const routes = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.icon = name => fs.readFileSync(`./public/icons/${name}.svg`);
  next();
});

app.use((req, res, next) => {
  // res.locals.h = helpers;
  next();
});

app.use("/", routes);

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
