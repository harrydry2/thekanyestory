require('dotenv').config()
const mongoose = require("mongoose");
const expressStaticGzip = require("express-static-gzip");
const express = require("express");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const fs = require("fs");
const app = express();

mongoose.connect(process.env.MONGO_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;

require("./models/Ideas");
require("./models/Users");
require("./models/Comments");

app.locals.diwtn = require("date-fns/distance_in_words_to_now");
const passportConfig = require("./config/passportConfig");
const routes = require("./routes/index");
const helpers = require("./helpers");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    maxAge: 24 * 24 * 24 * 365 * 1000,
    keys: ["asdasdsda"]
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.icon = name => fs.readFileSync(`./public/icons/${name}.svg`);
  next();
});

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use("/", routes);

// 404 page
app.use(function(req, res) {
  res.render("404");
});

// 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).render("404");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
