const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");
const fs = require("fs");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://harrydry:DavidLuiz4@ds159676.mlab.com:59676/kidsleepy"
);
require("./models/Email.js");

const app = express();

app.locals.format = require("date-fns/format");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.icon = name => fs.readFileSync(`./public/icons/${name}.svg`);
  next();
});

require("./routes/emailRoutes")(app);

app.get("/", (req, res) => {
  res.render("main");
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log("listening"));
